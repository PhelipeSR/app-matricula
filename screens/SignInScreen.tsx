import { useContext } from 'react';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import authContext from '../contexts/auth';


export default function SignInScreen() {
  const { signed, SignIn } = useContext(authContext);

  async function handleSignIn() {
    const {error, msg} = await SignIn('123456789', '123');
  }

  return (
    <View style={styles.container}>
      <Button title='Logar' onPress={handleSignIn}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
