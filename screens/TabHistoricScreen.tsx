import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Card, Paragraph } from 'react-native-paper';

import { FetchHistoric, IResponse } from '../services/historic';


export default function TabRegistrationScreen() {
  const [historics, setHistorics] = useState<Array<IResponse>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadRegistrationData() {
      setIsLoading(true);
      const response = await FetchHistoric();
      setHistorics(response);
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
          historics.map((historic) => {
            return (
              <TouchableOpacity
                key={historic.turma.disciplina.codigo}
                activeOpacity={0.6}
                onPress={() => alert('Pressed!')}
              >
                <Card style={styles.card}>
                  <Card.Title title={historic.turma.disciplina.nome} subtitle={historic.turma.disciplina.codigo} />
                  <Card.Content>
                    <View style={{flexDirection: 'row'}}>
                      <Paragraph style={{fontWeight: 'bold', marginRight: 2}}>Turma:</Paragraph>
                      <Paragraph>{historic.turma.codigo}</Paragraph>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Paragraph style={{fontWeight: 'bold', marginRight: 2}}>Status:</Paragraph>
                      <Paragraph>{historic.status}</Paragraph>
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
  }
});
