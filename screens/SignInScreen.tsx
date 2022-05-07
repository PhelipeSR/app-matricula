import { useContext, useState } from 'react';
import { StyleSheet, View, Keyboard, Image, ImageBackground} from 'react-native';
import authContext from '../contexts/auth';
import { TextInput, Button, HelperText, Snackbar } from 'react-native-paper';


export default function SignInScreen() {
  const { SignIn } = useContext(authContext);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorUser, setErrorUser] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorSignIn, setErrorSignIn] = useState<string | undefined>('');
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    
    setErrorUser(!user);
    setErrorPassword(!password)

    if (user && password) {
      setLoading(true);
      Keyboard.dismiss();

      const {error, msg} = await SignIn(user, password);

      if (error) {
        setVisible(true);
        setErrorSignIn(msg);
        setLoading(false);
      }
    }
  }

  function handleUserChangeText(text: string) {
    setErrorUser(!text);
    setUser(text);
  }

  function handlePasswordChangeText(text: string) {
    setErrorPassword(!text);
    setPassword(text);
  }

  function onDismissSnackBar() {
    setVisible(false);
  }

  return (
    <View style={styles.container}>
      <Snackbar wrapperStyle={{marginHorizontal:20}} style={{marginHorizontal:0, backgroundColor: '#dc3545'}} visible={visible} onDismiss={onDismissSnackBar} duration={3000}>
        {errorSignIn}
      </Snackbar>
      <View style={{ alignItems: 'center', height: 220}}>
        <Image resizeMode='center' style={{paddingVertical: 100, paddingHorizontal: 10, height: 'auto'}} source={require('../assets/images/logo.png')} />
      </View>
      <TextInput
        mode="outlined"
        label="Matrícula"
        value={user}
        onChangeText={handleUserChangeText}
        autoComplete="username"
        style={styles.input}
        left={<TextInput.Icon name="account" />}
      />
      <HelperText onPressIn onPressOut type="error" visible={errorUser}>Matrícula inválida</HelperText>

      <TextInput
        mode="outlined"
        label="Senha"
        value={password}
        onChangeText={handlePasswordChangeText}
        secureTextEntry
        autoComplete={"current-password"}
        style={styles.input}
        left={<TextInput.Icon name="eye" />}
      />
      <HelperText onPressIn onPressOut type="error" visible={errorPassword}>Senha inválida</HelperText>

      <Button style={styles.button} loading={loading} disabled={loading} mode='contained' onPress={handleSignIn}>Entrar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
  },
  input: {
    // marginTop: 20,
  }
});
