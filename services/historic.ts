export interface IResponse {
  status: string;
  dataHora: string;
  turma: {
    codigo: string;
    disciplina: {
      nome: string;
      codigo: string;
      cargaHoraria: number;
      unidade: string
    };
  };
}


export function FetchHistoric(): Promise<Array<IResponse>> {
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
            },
            "dataHora": "2020-03-01T12:00:03"
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
            },
            "dataHora": "2020-03-01T12:00:03"    
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
            },
            "dataHora": "2020-03-01T12:00:03"
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
            },
            "dataHora": "2020-03-01T12:00:03"
        },
      ]);
    }, 500);
  });
}
