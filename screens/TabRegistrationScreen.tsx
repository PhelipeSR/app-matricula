import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Card, Paragraph, Modal, Portal, Button, Divider, useTheme, Title } from 'react-native-paper';
import { useHistoric } from '../contexts/historic';
import { useRegistration } from '../contexts/registration';
import { getClassInfo, IClassesResponse } from '../services/clesses';

import { IRegistrationResponse } from '../services/registration';
import { IHistoricResponse } from '../services/historic';


export default function TabRegistrationScreen() {
  const { colors } = useTheme();
  const [classStatus, setClassStatus] = useState('');
  const { historics, setHistoric } = useHistoric();
  const { registrations, setRegistrations, isRegistrationLoading } = useRegistration();
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmRegistration, setConfirmRegistration] = useState(false);
  const [isLoadingClass, setIsLoadingClass] = useState(false);
  const [disabledConfirmRegistration, setDisabledConfirmRegistration] = useState(true);
  const [_class, setClass] = useState<IClassesResponse>();

  useEffect(() => {
    let disabled = false;

    for (let registration of registrations) {
      if (registration.status == 'PreMatricula') {
        disabled = true;
        break
      }
    }

    setDisabledConfirmRegistration(disabled);
  }, [registrations])

  async function hendlerClassInfo(codigo: string, turma: string, status: string) {
    setClassStatus(status);
    setModalVisible(true);
    setIsLoadingClass(true);
    const response = await getClassInfo(codigo, turma);
    setClass(response);
    setIsLoadingClass(false);
  }

  function changeStatus(status: string) {
    const newRegistrations: Array<IRegistrationResponse> = registrations.map(registration => {
      if (registration.turma.codigo === _class?.codigo && registration.turma.disciplina.codigo === _class?.disciplina.codigo) {
        registration.status = status;
      }

      return registration;
    });

    setRegistrations(newRegistrations);
    setModalVisible(false);
  }

  function removeRegistration() {
    registrations.map((registration, index) => {
      if (registration.turma.codigo === _class?.codigo && registration.turma.disciplina.codigo === _class?.disciplina.codigo) {
        registrations.splice(index, 1);
      }
    });
    setModalVisible(false);
  }

  function handleConfirmRegistration() {
    const newRegistrations: IRegistrationResponse[] = registrations.map(registration => {
      if(!registration.status) {
        registration.status = 'Pedido';
      }  
      else if (registration.status == 'Confirmado') {
        registration.status = 'Matriculado';
      }  
      else if (registration.status == 'Retirado') {
        registration.status = 'Retirado-Aluno';
      }

      return registration;
    });

    addHistorico(newRegistrations);
    setRegistrations(newRegistrations);
    setConfirmRegistration(true);
  }

  function addHistorico(newRegistrations: IRegistrationResponse[]) {
    const date = new Date();

    const newHistorics: IHistoricResponse[] = newRegistrations.map(registration => {
      return {
        "status": registration.status,
        "dataHora": date.toISOString(),
        "turma": {
            "codigo": registration.turma.codigo,
            "disciplina": {
                "nome": registration.turma.disciplina.nome,
                "codigo": registration.turma.disciplina.codigo,
                "cargaHoraria": registration.turma.disciplina.cargaHoraria,
                "unidade": registration.turma.disciplina.unidade
            },
          },
      }
  });


    setHistoric([...historics, ...newHistorics])
  }

  return (
    <>
      <ScrollView>
        {
          isRegistrationLoading ? (
            <View style={{justifyContent: 'center', flex: 1}}>
              <ActivityIndicator animating={true} />
            </View>
          ) : (
            <>
              {registrations.map((registration) => {
                return (
                  <TouchableOpacity
                    key={registration.turma.disciplina.codigo}
                    activeOpacity={0.6}
                    onPress={() => hendlerClassInfo(registration.turma.disciplina.codigo, registration.turma.codigo, registration.status)}
                  >
                    <Card style={styles.card}>
                      <Card.Title title={registration.turma.disciplina.nome} subtitle={registration.turma.disciplina.codigo} />
                      <Card.Content>
                        <View style={{flexDirection: 'row'}}>
                          <Paragraph style={{fontWeight: 'bold', marginRight: 2}}>Turma:</Paragraph>
                          <Paragraph>{registration.turma.codigo}</Paragraph>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Paragraph style={{fontWeight: 'bold', marginRight: 2}}>Status:</Paragraph>
                          <Paragraph>{registration.status}</Paragraph>
                        </View>
                      </Card.Content>
                    </Card>
                  </TouchableOpacity>
                )
              })}
              {!confirmRegistration && (
                <Button onPress={() => handleConfirmRegistration()} disabled={disabledConfirmRegistration} mode='contained' style={{marginVertical: 32}}>Confirmar Matrícula</Button>
              )}
            </>
          )
        }
      </ScrollView>

      <Portal>
        <Modal visible={modalVisible} onDismiss={() => setModalVisible(false)} contentContainerStyle={{
          backgroundColor: colors.background,
          flex: 1,
          justifyContent: 'flex-start',
        }}>
          <View style={{backgroundColor: colors.background}}>
            <Button icon="arrow-left" mode='text' color={colors.text} onPress={() => setModalVisible(false)} style={styles.modalButton}>Voltar</Button>
          </View>
          <Divider />
            <ScrollView>
            {
              isLoadingClass ? (
                <View style={{justifyContent: 'center', flex: 1, marginTop: 16, alignItems: 'center'}}>
                  <ActivityIndicator animating={true} />
                </View>
              ) : (
                <>
                  <Title style={{textAlign: 'center', marginVertical: 8}}>{_class?.disciplina?.nome} - {_class?.disciplina?.codigo}</Title>
                  <Card style={styles.card}>
                    <Card.Title title={`Turma ${_class?.codigo}`} titleNumberOfLines={2}/>
                    <Card.Content>
                      <View style={{flexDirection: 'row'}}>
                        <Paragraph style={{fontWeight: 'bold', marginRight: 2}}>Total de Vagas:</Paragraph>
                        <Paragraph>{_class?.vagas}</Paragraph>
                      </View>
                      <Divider style={{marginVertical: 4}} />
                      <View style={{flexDirection: 'row'}}>
                        <Paragraph style={{fontWeight: 'bold', marginRight: 2}}>Vagas Ocupadas:</Paragraph>
                        <Paragraph>{_class?.alunosMatriculados}</Paragraph>
                      </View>
                      <Divider style={{marginVertical: 4}} />
                      <View style={{}}>
                        <Paragraph style={{fontWeight: 'bold', marginRight: 2}}>Horário:</Paragraph>
                        {_class?.horarios.map((horario) => (
                          <Paragraph key={`${horario.dia}-${horario.horaInicio}`}>{horario.dia} {horario.horaInicio} - {horario.horaFim}</Paragraph>
                        ))}
                      </View>
                      <Divider style={{marginVertical: 4}} />
                      <View style={{}}>
                        <Paragraph style={{fontWeight: 'bold', marginRight: 2}}>Professor(es):</Paragraph>
                        {_class?.professores.map((professor) => (
                          <Paragraph key={professor.nome}>{professor.nome}</Paragraph>
                        ))}
                      </View>
                    </Card.Content>
                  </Card>
                  {['PreMatricula', 'Retirado', 'Confirmado'].includes(classStatus) && (
                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 32}}>
                      <Button onPress={() => changeStatus('Retirado')} mode='outlined' color={colors.error} style={{marginRight: 16}}>Retirar</Button>
                      <Button onPress={() => changeStatus('Pedido')} mode='contained'>Confirmar</Button>
                    </View>
                  )}
                  {!classStatus && (
                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 32}}>
                      <Button onPress={() => removeRegistration()} mode='contained' color={colors.error} style={{marginRight: 16}}>Excluir</Button>
                    </View>
                  )}
                </>
              )
            }
          </ScrollView>
        </Modal>
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    color: 'red',
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card: {
    marginVertical: 5,
  },
  modalButton: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
  }
});
