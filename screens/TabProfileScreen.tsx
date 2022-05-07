import { useContext } from 'react';
import { StyleSheet, Button, View } from 'react-native';

import authContext from '../contexts/auth';
import { RootTabScreenProps } from '../types';

export default function TabProfileScreen({ navigation }: RootTabScreenProps<'TabRegistration'>) {
  const { SignOut } = useContext(authContext);

  function hendleSignOut() {
    SignOut()
  }

  return (
    <View style={styles.container}>
      <Button title='Sair' onPress={hendleSignOut}>oi</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
