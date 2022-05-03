interface IResponse {
  token?: string;
  user?: {
    name: string;
    email: string;
    matricula: string;
  };
  error?: boolean;
  msg?: string;
}

export function FetchSignIn(user: string, password: string): Promise<IResponse> {
  if (user !== '123456789' || password !== '123') {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          error: true,
          msg: 'Usuário ou senha incorretos'
        });
      }, 2000);
    });
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'asdfasdfasdfasdf',
        user: {
          name: 'Test User',
          email: '123456789@aluno.unb.com',
          matricula: '123456789',
        }
      })
    }, 2000);
  });
}
