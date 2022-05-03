import { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FetchSignIn } from '../services/auth';

interface IAuthProvider {
  children: JSX.Element;
}

interface ISignIn {
  error: boolean;
  msg: string | undefined;
}

interface IAuthContextData {
  signed: boolean;
  user: object | undefined;
  SignIn(user: string, password: string): Promise<ISignIn>;
  SignOut(): void;
}

const authContext = createContext<IAuthContextData>({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<object | undefined>(undefined)

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
    }

    loadStorageData()
  }, [])

  async function SignIn(user: string, password: string) {
    const response = await FetchSignIn(user, password);

    if (response?.error) {
      return { error: response.error, msg: response.msg };
    }

    
    if(response.token && response.user) {
      setUser(response.user);
      await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
      await AsyncStorage.setItem('@RNAuth:token', response.token);
    }

    return { error: false, msg: '' };
  }

  function SignOut() {
    AsyncStorage.clear().then(() => {
      setUser(undefined);
    });
  }

  return (
    <authContext.Provider value={{signed: !!user, user: user, SignIn, SignOut}}>
      {children}
    </authContext.Provider>
  )
}

export default authContext;
