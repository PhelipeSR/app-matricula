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
          <Text style={styles.text}>{user?.name}</Text>
        </View>
        <Divider style={styles.separator} />
        <View style={styles.wrapper}>
        <Avatar.Icon size={24} icon="email" />
          <Text style={styles.text}>{user?.email}</Text>
        </View>
        <Divider style={styles.separator} />
        <View style={styles.wrapper}>
          <Avatar.Icon size={24} icon="information" />
          <Text style={styles.text}>{user?.matricula}</Text>
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
    marginLeft: 8,
  },
  separator: {
    marginVertical: 10,
  },
});
