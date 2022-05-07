export interface IResponse {
  status: string;
  turma: {
    codigo: string;
    disciplina: {
      nome: string;
      codigo: string;
      cargaHoraria: number;
      unidade: string
    };
    horarios: Array<{
      dia: string;
      horaInicio: string;
      horaFim: string;
    }>;
    professores: Array<{
      nome: string;
    }>;
  };
}


export function FetchRegistration(): Promise<Array<IResponse>> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          "status": "PreMatricula",
          "turma": {
            "codigo": "A",
            "disciplina": {
              "nome": "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
              "codigo": "ENE0022",
              "cargaHoraria": 60,
              "unidade": "ENE"
            },
            "horarios": [
              {
                "dia": "SEG",
                "horaInicio": "10:00",
                "horaFim": "10:00"
              },
              {
                "dia": "QUA",
                "horaInicio": "10:00",
                "horaFim": "11:50"
              }
            ],
            "professores": [
              {
                "nome": "UGO SILVA DIAS"
              }
            ]
          }    
        },
        {
          "status": "PreMatricula",
          "turma": {
            "codigo": "A",
            "disciplina": {
              "nome": "FUNDAMENTOS DE REDES",
              "codigo": "ENE0274",
              "cargaHoraria": 60,
              "unidade": "ENE"
            },
            "horarios": [
              {
                "dia": "SEG",
                "horaInicio": "08:00",
                "horaFim": "09:50"
              },
              {
                "dia": "QUA",
                "horaInicio": "08:00",
                "horaFim": "09:50"
              }
            ],
            "professores": [
              {
                "nome": "FABIO LUCIO LOPES DE MENDONCA"
              }
            ]
          }    
        },
        {
          "status": "PreMatricula",
          "turma": {
            "codigo": "C",
            "disciplina": {
              "nome": "FISICA 2 EXPERIMENTAL",
              "codigo": "IFD0177",
              "cargaHoraria": 60,
              "unidade": "IFD"
            },
            "horarios": [
              {
                "dia": "TER",
                "horaInicio": "14:00",
                "horaFim": "15:50"
              },
              {
                "dia": "TER",
                "horaInicio": "16:00",
                "horaFim": "16:50"
              }
            ],
            "professores": [
              {
                "nome": "FERNANDO LESSA CARNEIRO"
              }
            ]
          }    
        },
        {
          "status": "PreMatricula",
          "turma": {
            "codigo": "J",
            "disciplina": {
              "nome": "CÁLCULO 3",
              "codigo": "MAT0027",
              "cargaHoraria": 90,
              "unidade": "MAT"
            },
            "horarios": [
              {
                "dia": "TER",
                "horaInicio": "08:00",
                "horaFim": "09:50"
              },
              {
                "dia": "QUI",
                "horaInicio": "08:00",
                "horaFim": "09:50"
              },
              {
                "dia": "SEX",
                "horaInicio": "08:00",
                "horaFim": "09:50"
              }
            ],
            "professores": [
              {
                "nome": "RADERSON RODRIGUES DA SILVA"
              }
            ]
          }    
        }
      ]);
    }, 500);
  });
}
