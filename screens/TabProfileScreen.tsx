import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import authContext from '../contexts/auth';
import { Avatar, Text, Button, Divider } from 'react-native-paper';

export default function TabProfileScreen() {
  const { SignOut, user } = useContext(authContext);
  
  function hendleSignOut() {
    SignOut()
  }
  
  return (
    <View style={styles.container}>
      <Avatar.Icon size={100} icon="account" style={styles.avatar} />
      <View style={styles.info}>
        <View style={styles.wrapper}>
          <Avatar.Icon size={24} icon="account-arrow-right" />
          <View>
            <Text style={styles.text}>Nome:</Text>
            <Text style={styles.subtext}>{user?.name}</Text>
          </View>
        </View>
        <Divider style={styles.separator} />
        <View style={styles.wrapper}>
        <Avatar.Icon size={24} icon="email" />
          <View>
            <Text style={styles.text}>E-mail:</Text>
            <Text style={styles.subtext}>{user?.email}</Text>
          </View>
        </View>
        <Divider style={styles.separator} />
        <View style={styles.wrapper}>
          <Avatar.Icon size={24} icon="information" />
          <View>
            <Text style={styles.text}>Matrícula:</Text>
            <Text style={styles.subtext}>{user?.matricula}</Text>
          </View>
        </View>
      </View>
      <Button mode='contained' style={styles.button} onPress={hendleSignOut}>Sair</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginTop: 'auto',
    marginBottom: 40,
  },
  avatar: {
    alignSelf: 'center',
  },
  info: {
    marginTop: 50,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  subtext: {
    marginLeft: 8,
    fontSize: 16,
  },
  separator: {
    marginVertical: 10,
  },
});
