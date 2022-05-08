import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { 
  Modal,
  Portal,
  useTheme,
  Title,
  Button,
  Divider,
  ActivityIndicator,
  Card,
  Paragraph,
  Searchbar,
  Dialog,
  TextInput,
} from 'react-native-paper';
import { useRegistration } from '../contexts/registration';
import { getClasses, IClassesResponse } from '../services/clesses';

import { getOfferList, IResponse } from '../services/offerList';

export default function TabOfferListScreen() {
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOffer, setFilteredOffer] = useState<Array<IResponse>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingClasses, setIsLoadingClasses] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [classes, setClasses] = useState<Array<IClassesResponse>>([]);
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [priority, setPriority] = useState('');
  const [turma, setTurma] = useState('');
  const { registrations, setRegistrations } = useRegistration();

  function showDialog() {
    setVisibleDialog(true)
  }

  async function onChangeSearch(query: string) {
    setSearchQuery(query);
    if (query){
      setIsLoading(true);
      const response = await getOfferList(query);
      setIsLoading(false);
      setFilteredOffer(response);
    }else{
      setFilteredOffer([]);
    }
  }

  async function getOfferInfo(codigo: string) {
    setModalVisible(true);
    setIsLoadingClasses(true);
    const classes = await getClasses(codigo);
    setClasses(classes);
    setIsLoadingClasses(false);
  }

  function hideModal() {
    setModalVisible(false);
  }

  function hendleAddClass(codigo: string) {
    setTurma(codigo);
    setPriority('');
    showDialog();
  }

  function addClass() {
    var _class = classes.filter(obj => {
      return obj.codigo === turma
    });

    if (_class.length > 0) {
      setRegistrations([...registrations, {
        "status": '',
        "turma": {
          "codigo": _class[0].codigo,
          "disciplina": _class[0].disciplina,
          "horarios": _class[0].horarios,
          "professores": _class[0].professores,
        }
      }]);
    }
    setVisibleDialog(false);
    setModalVisible(false);
  }

  return (
    <>
      <View style={styles.container}>
        {!modalVisible && (
          <Searchbar
            placeholder="Buscar disciplinas"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        )}
      </View>
      <ScrollView>
        {
          isLoading ? (
            <View style={{justifyContent: 'center', flex: 1, marginTop: 16}}>
              <ActivityIndicator animating={true} />
            </View>
          ) : (
            filteredOffer.map((offer) => {
              return (
                <TouchableOpacity
                  key={offer.codigo}
                  activeOpacity={0.6}
                  onPress={() => getOfferInfo(offer.codigo)}
                >
                  <Card style={styles.card}>
                    <Card.Title title={offer.nome} subtitle={offer.codigo} />
                    <Card.Content>
                      <View style={{flexDirection: 'row'}}>
                        <Paragraph style={{fontWeight: 'bold', marginRight: 2}}>Unidade Acadêmica:</Paragraph>
                        <Paragraph>{offer.unidadeAcademica}</Paragraph>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Paragraph style={{fontWeight: 'bold', marginRight: 2}}>Carga Horária:</Paragraph>
                        <Paragraph>{offer.cargaHorariaTotal}</Paragraph>
                      </View>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
              )
            })
          )
        }
      </ScrollView>

      <Portal>
        <Modal visible={modalVisible} onDismiss={hideModal} contentContainerStyle={{
          backgroundColor: colors.background,
          flex: 1,
          justifyContent: 'flex-start',
        }}>
          <View style={{backgroundColor: colors.background}}>
            <Button icon="arrow-left" mode='text' color={colors.text} onPress={() => hideModal()} style={styles.modalButton}>Voltar</Button>
          </View>
          <Divider />
            <ScrollView>
            {
              isLoadingClasses ? (
                <View style={{justifyContent: 'center', flex: 1, marginTop: 16, alignItems: 'center'}}>
                  <ActivityIndicator animating={true} />
                </View>
              ) : (
                classes.map((_class, index) => {
                  return (
                    <>
                      {index === 0 && (
                        <Title style={{textAlign: 'center', marginVertical: 8}}>{_class.disciplina.nome} - {_class.disciplina.codigo}</Title>
                      )}
                      <TouchableOpacity
                        key={`${_class.codigo}-${_class.disciplina.codigo}`}
                        activeOpacity={0.6}
                        onPress={() => hendleAddClass(_class.codigo)}
                      >
                        <Card style={styles.card} >
                          <Card.Title title={`Turma ${_class.codigo}`} titleNumberOfLines={2}/>
                          <Card.Content>
                            <View style={{flexDirection: 'row'}}>
                              <Paragraph style={{fontWeight: 'bold', marginRight: 2}}>Total de Vagas:</Paragraph>
                              <Paragraph>{_class.vagas}</Paragraph>
                            </View>
                            <Divider style={{marginVertical: 4}} />
                            <View style={{flexDirection: 'row'}}>
                              <Paragraph style={{fontWeight: 'bold', marginRight: 2}}>Vagas Ocupadas:</Paragraph>
                              <Paragraph>{_class.alunosMatriculados}</Paragraph>
                            </View>
                            <Divider style={{marginVertical: 4}} />
                            <View style={{}}>
                              <Paragraph style={{fontWeight: 'bold', marginRight: 2}}>Horário:</Paragraph>
                              {_class.horarios.map((horario) => (
                                <Paragraph key={horario.dia}>{horario.dia} {horario.horaInicio} - {horario.horaFim}</Paragraph>
                              ))}
                            </View>
                            <Divider style={{marginVertical: 4}} />
                            <View style={{}}>
                              <Paragraph style={{fontWeight: 'bold', marginRight: 2}}>Professor(es):</Paragraph>
                              {_class.professores.map((professor) => (
                                <Paragraph key={professor.nome}>{professor.nome}</Paragraph>
                              ))}
                            </View>
                          </Card.Content>
                        </Card>
                      </TouchableOpacity>
                    </>
                  )
                })
              )
            }
          </ScrollView>
        </Modal>
      </Portal>

      <View>
        <Portal>
          <Dialog visible={visibleDialog} onDismiss={() => setVisibleDialog(false)}>
            <Dialog.Title>Adicionar Turma</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Confirme a inclusão desta turma no seu pedido de matrícula</Paragraph>
              <TextInput
                style={{marginTop: 16}}
                label="Prioridade"
                value={priority}
                onChangeText={text => setPriority(text)}
                autoComplete={false}
                keyboardType="numeric"
                mode='outlined'
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button style={{marginRight: 16}} onPress={() => setVisibleDialog(false)}>Cancelar</Button>
              <Button mode='contained' onPress={addClass}>Confirmar</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 8,
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
