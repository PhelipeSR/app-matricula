export interface IUserResponse {
  name: string;
  email: string;
  matricula: string;
}

interface IResponse {
  token?: string;
  user?: IUserResponse;
  error?: boolean;
  msg?: string;
}

const students = [{
    "matricula" : "180012345",
    "nome" : "DANIEL AKIRA ANDO"
  }, {
    "matricula" : "180032435",
    "nome" : "VICTOR HUGO DE SOUSA"
  }, {
    "matricula" : "180049548",
    "nome" : "RAYAN JHONNYE ALVES ALEXANDRINO"
  }, {
    "matricula" : "180039283",
    "nome" : "JADE MARTINS ARANTES"
  }, {
    "matricula" : "180059459",
    "nome" : "ALINE DOS SANTOS PEREIRA"
  }, {
    "matricula" : "190003434",
    "nome" : "VINICIUS ALVES DE OLIVEIRA"
  }, {
    "matricula" : "190002912",
    "nome" : "MAIRA LEITE CONCEICAO"
  }, {
    "matricula" : "190003939",
    "nome" : "VICTOR NUNES GOMES"
  }, {
    "matricula" : "190029293",
    "nome" : "VITOR DE AGUIAR CARAZZA"
  }
];

export function FetchSignIn(registration: string, password: string): Promise<IResponse> {
  const users = students.filter(student => {
    return student.matricula == registration;
  });

  console.log(users)

  if (!users.length) {
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
          name: users[0].nome,
          email: `${users[0].matricula}@aluno.unb.com`,
          matricula: users[0].matricula,
        }
      })
    }, 2000);
  });
}
