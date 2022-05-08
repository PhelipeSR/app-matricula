import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Card, Paragraph } from 'react-native-paper';

import { FetchRegistration, IResponse } from '../services/registration';


export default function TabRegistrationScreen() {
  const [registrations, setRegistrations] = useState<Array<IResponse>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadRegistrationData() {
      setIsLoading(true);
      const response = await FetchRegistration();
      setRegistrations(response);
      setIsLoading(false);
    }
    loadRegistrationData();
  }, [])

  return (
    <ScrollView>
      {
        isLoading ? (
          <View style={{justifyContent: 'center', flex: 1}}>
            <ActivityIndicator animating={true} />
          </View>
        ) : (
          registrations.map((registration) => {
            return (
              <TouchableOpacity
                key={registration.turma.disciplina.codigo}
                activeOpacity={0.6}
                onPress={() => alert('Pressed!')}
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
          })
        )
      }
    </ScrollView>
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
    // borderStyle: 'solid',
    // borderBottomColor: 'black',
    // borderWidth: 1,
  }
});
