export interface IClassesResponse {
  codigo: string;
  vagas: number;
  alunosMatriculados: number;
  horarios: Array<{
    dia: string;
    horaInicio: string;
    horaFim: string;
  }>;
  professores: Array<{
    nome: string;
  }>;
  disciplina: {
    nome: string;
    codigo: string;
    cargaHoraria: number;
    unidade: string
  };
}

const classes = [ 
  {
    "codigo": "A",
    "vagas": 70,
    "alunosMatriculados": 60,
    "disciplina": {
      "codigo" : "MAT0025",
      "nome" : "CÁLCULO 1",
      "cargaHoraria" : 90,
      "unidade" : "MAT"
    },
    "horarios": [
      {
        "dia": "SEG",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      },
      {
        "dia": "TER",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      },
      {
        "dia": "QUI",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      }
    ],
    "professores": [
      {
        "nome": "CELIUS ANTONIO MAGALHAES"
      },
      {
        "nome": "LEANDRO MARTINS CIOLETTI"
      }
    ]
  },
  {
    "codigo": "J",
    "vagas": 70,
    "alunosMatriculados": 60,
    "disciplina": {
      "codigo" : "MAT0025",
      "nome" : "CÁLCULO 1",
      "cargaHoraria" : 90,
      "unidade" : "MAT"
    },
    "horarios": [
      {
        "dia": "SEG",
        "horaInicio": "14:00",
        "horaFim": "15:50"
      },
      {
        "dia": "QUA",
        "horaInicio": "14:00",
        "horaFim": "15:50"
      },
      {
        "dia": "SEX",
        "horaInicio": "14:00",
        "horaFim": "15:50"
      }
    ],
    "professores": [
      {
        "nome": "WANG QIAOLING"
      },
    ]
  },
  {
    "codigo": "O",
    "vagas": 70,
    "alunosMatriculados": 60,
    "disciplina": {
      "codigo" : "MAT0025",
      "nome" : "CÁLCULO 1",
      "cargaHoraria" : 90,
      "unidade" : "MAT"
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
        "nome": "LINEU DA COSTA ARAUJO NETO"
      },
    ]
  },
  {
    "codigo": "A",
    "vagas": 66,
    "alunosMatriculados": 52,
    "disciplina": {
      "codigo" : "MAT0031",
      "nome" : "INTRODUCAO A ALGEBRA LINEAR",
      "cargaHoraria" : 60,
      "unidade" : "MAT"
    },
    "horarios": [
      {
        "dia": "SEG",
        "horaInicio": "16:00",
        "horaFim": "17:50"
      },
      {
        "dia": "QUA",
        "horaInicio": "16:00",
        "horaFim": "17:50"
      }
    ],
    "professores": [
      {
        "nome": "PAVEL ZALESSKI"
      },
    ]
  },
  {
    "codigo": "G",
    "vagas": 66,
    "alunosMatriculados": 28,
    "disciplina": {
      "codigo" : "MAT0031",
      "nome" : "INTRODUCAO A ALGEBRA LINEAR",
      "cargaHoraria" : 60,
      "unidade" : "MAT"
    },
    "horarios": [
      {
        "dia": "TER",
        "horaInicio": "19:00",
        "horaFim": "20:50"
      },
      {
        "dia": "QUI",
        "horaInicio": "19:00",
        "horaFim": "20:50"
      }
    ],
    "professores": [
      {
        "nome": "ALBERTO MASAYOSHI FARIA OHASHI"
      },
    ]
  },
  {
    "codigo": "A",
    "vagas": 30,
    "alunosMatriculados": 28,
    "disciplina": {
      "codigo" : "ENE0026",
      "nome" : "INTRODUÇÃO A ENGENHARIA DE REDES DE COMUNICACÃO",
      "cargaHoraria" : 30,
      "unidade" : "ENE"
    },
    "horarios": [
      {
        "dia": "SEX",
        "horaInicio": "14:00",
        "horaFim": "15:50"
      },
    ],
    "professores": [
      {
        "nome": "PAULO ROBERTO DE LIRA GONDIM"
      }
    ]
  },
  {
    "codigo": "A",
    "vagas": 40,
    "alunosMatriculados": 25,
    "disciplina": {
      "codigo" : "ENE0334",
      "nome" : "COMPUTACAO PARA ENGENHARIA",
      "cargaHoraria" : 60,
      "unidade" : "ENE"
    },
    "horarios": [
      {
        "dia": "QUA",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      },
      {
        "dia": "SEX",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      }
    ],
    "professores": [
      {
        "nome": "DANIEL GUERREIRO E SILVA"
      }
    ]
  },
  {
    "codigo": "B",
    "vagas": 40,
    "alunosMatriculados": 25,
    "disciplina": {
      "codigo" : "ENE0334",
      "nome" : "COMPUTACAO PARA ENGENHARIA",
      "cargaHoraria" : 60,
      "unidade" : "ENE"
    },
    "horarios": [
      {
        "dia": "SEG",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      },
      {
        "dia": "QUA",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      }
    ],
    "professores": [
      {
        "nome": "VINICIUS PEREIRA GONCALVES"
      }
    ]
  },
  {
    "codigo": "B",
    "vagas": 30,
    "alunosMatriculados": 12,
    "disciplina": {
      "codigo" : "IFD0171",
      "nome" : "FISICA 1",
      "cargaHoraria" : 60,
      "unidade" : "IFD"
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
      }
    ],
    "professores": [
      {
        "nome": "CAROLINA MATTE GREGORY"
      }
    ]
  },
  {
    "codigo": "G",
    "vagas": 60,
    "alunosMatriculados": 38,
    "disciplina": {
      "codigo" : "IFD0171",
      "nome" : "FISICA 1",
      "cargaHoraria" : 60,
      "unidade" : "IFD"
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
        "nome": "DEMETRIO ANTONIO DA SILVA"
      }
    ]
  },
  {
    "codigo": "B",
    "vagas": 30,
    "alunosMatriculados": 12,
    "disciplina": {
      "codigo" : "IFD0173",
      "nome" : "FISICA 1 EXPERIMENTAL",
      "cargaHoraria" : 30,
      "unidade" : "IFD"
    },
    "horarios": [
      {
        "dia": "SEG",
        "horaInicio": "08:00",
        "horaFim": "09:50"
      },
    ],
    "professores": [
      {
        "nome": "CAROLINA MATTE GREGORY"
      }
    ]
  },
  {
    "codigo": "G",
    "vagas": 60,
    "alunosMatriculados": 38,
    "disciplina": {
      "codigo" : "IFD0173",
      "nome" : "FISICA 1 EXPERIMENTAL",
      "cargaHoraria" : 30,
      "unidade" : "IFD"
    },
    "horarios": [
      {
        "dia": "SEX",
        "horaInicio": "08:00",
        "horaFim": "09:50"
      },
    ],
    "professores": [
      {
        "nome": "DEMETRIO ANTONIO DA SILVA"
      }
    ]
  },
  {
    "codigo": "A",
    "vagas": 60,
    "alunosMatriculados": 54,
    "disciplina": {
      "codigo" : "IFD0175",
      "nome" : "FISICA 2",
      "cargaHoraria" : 60,
      "unidade" : "IFD"
    },
    "horarios": [
      {
        "dia": "SEG",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      },
      {
        "dia": "QUA",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      }
    ],
    "professores": [
      {
        "nome": "FERNANDO MARQUES CARVALHO"
      }
    ]
  },
  {
    "codigo": "B",
    "vagas": 80,
    "alunosMatriculados": 13,
    "disciplina": {
      "codigo" : "IFD0175",
      "nome" : "FISICA 2",
      "cargaHoraria" : 60,
      "unidade" : "IFD"
    },
    "horarios": [
      {
        "dia": "TER",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      },
      {
        "dia": "QUI",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      }
    ],
    "professores": [
      {
        "nome": "ALEXANDRE DODONOV"
      }
    ]
  },
  {
    "codigo": "A",
    "vagas": 30,
    "alunosMatriculados": 21,
    "disciplina": {
      "codigo" : "ENE0013",
      "nome" : "ALGORITMOS E ESTRUTURA DE DADOS",
      "cargaHoraria" : 60,
      "unidade" : "ENE"
    },
    "horarios": [
      {
        "dia": "TER",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      },
      {
        "dia": "QUI",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      }
    ],
    "professores": [
      {
        "nome": "VINICIUS PEREIRA GONCALVES"
      }
    ]
  },
  {
    "codigo": "B",
    "vagas": 30,
    "alunosMatriculados": 12,
    "disciplina": {
      "codigo" : "ENE0013",
      "nome" : "ALGORITMOS E ESTRUTURA DE DADOS",
      "cargaHoraria" : 60,
      "unidade" : "ENE"
    },
    "horarios": [
      {
        "dia": "SEG",
        "horaInicio": "16:00",
        "horaFim": "17:50"
      },
      {
        "dia": "QUA",
        "horaInicio": "16:00",
        "horaFim": "17:50"
      }
    ],
    "professores": [
      {
        "nome": "DANIEL GUERREIRO E SILVA"
      }
    ]
  },
  {
    "codigo": "A",
    "vagas": 60,
    "alunosMatriculados": 54,
    "disciplina": {
      "codigo" : "ENE0039",
      "nome" : "SISTEMAS DIGITAIS",
      "cargaHoraria" : 60,
      "unidade" : "ENE"
    },
    "horarios": [
      {
        "dia": "TER",
        "horaInicio": "16:00",
        "horaFim": "17:50"
      },
      {
        "dia": "QUI",
        "horaInicio": "16:00",
        "horaFim": "17:50"
      }
    ],
    "professores": [
      {
        "nome": "EDUARDO PEIXOTO FERNANDES DA SILVA"
      }
    ]
  },
  {
    "codigo": "B",
    "vagas": 60,
    "alunosMatriculados": 45,
    "disciplina": {
      "codigo" : "ENE0039",
      "nome" : "SISTEMAS DIGITAIS",
      "cargaHoraria" : 60,
      "unidade" : "ENE"
    },
    "horarios": [
      {
        "dia": "TER",
        "horaInicio": "14:00",
        "horaFim": "15:50"
      },
      {
        "dia": "QUI",
        "horaInicio": "14:00",
        "horaFim": "15:50"
      }
    ],
    "professores": [
      {
        "nome": "EDSON MINTSU HUNG"
      }
    ]
  },
  {
    "codigo": "A",
    "vagas": 20,
    "alunosMatriculados": 16,
    "disciplina": {
      "codigo" : "ENE0040",
      "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS",
      "cargaHoraria" : 30,
      "unidade" : "ENE"
    },
    "horarios": [
      {
        "dia": "SEG",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      },
    ],
    "professores": [
      {
        "nome": "LUIS FERNANDO RAMOS MOLINARO"
      }
    ]
  },
  {
    "codigo": "B",
    "vagas": 20,
    "alunosMatriculados": 0,
    "disciplina": {
      "codigo" : "ENE0040",
      "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS",
      "cargaHoraria" : 30,
      "unidade" : "ENE"
    },
    "horarios": [
      {
        "dia": "SEG",
        "horaInicio": "14:00",
        "horaFim": "15:50"
      },
    ],
    "professores": [
      {
        "nome": "LUIS FERNANDO RAMOS MOLINARO"
      }
    ]
  },
  {
    "codigo": "C",
    "vagas": 20,
    "alunosMatriculados": 0,
    "disciplina": {
      "codigo" : "ENE0040",
      "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS",
      "cargaHoraria" : 30,
      "unidade" : "ENE"
    },
    "horarios": [
      {
        "dia": "SEX",
        "horaInicio": "08:00",
        "horaFim": "09:50"
      },
    ],
    "professores": [
      {
        "nome": "LUIS FERNANDO RAMOS MOLINARO"
      }
    ]
  },
  {
    "codigo": "A",
    "vagas": 150,
    "alunosMatriculados": 130,
    "disciplina": {
      "codigo" : "MAT0026",
      "nome" : "CÁLCULO 2",
      "cargaHoraria" : 90,
      "unidade" : "MAT"
    },
    "horarios": [
      {
        "dia": "SEG",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      },
      {
        "dia": "TER",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      },
      {
        "dia": "QUI",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      }
    ],
    "professores": [
      {
        "nome": "KELLCIO OLIVEIRA ARAUJO"
      }
    ]
  },
  {
    "codigo": "G",
    "vagas": 150,
    "alunosMatriculados": 104,
    "disciplina": {
      "codigo" : "MAT0026",
      "nome" : "CÁLCULO 2",
      "cargaHoraria" : 90,
      "unidade" : "MAT"
    },
    "horarios": [
      {
        "dia": "SEG",
        "horaInicio": "08:00",
        "horaFim": "09:50"
      },
      {
        "dia": "TER",
        "horaInicio": "08:00",
        "horaFim": "09:50"
      },
      {
        "dia": "QUI",
        "horaInicio": "08:00",
        "horaFim": "09:50"
      }
    ],
    "professores": [
      {
        "nome": "ANGEL RODOLFO BAIGORRI"
      }
    ]
  },
  {
    "codigo": "A",
    "vagas": 60,
    "alunosMatriculados": 47,
    "disciplina": {
      "codigo" : "EST0023",
      "nome" : "PROBABILIDADE E ESTATÍSTICA",
      "cargaHoraria" : 60,
      "unidade" : "EST"
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
        "nome": "LEANDRO TAVARES CORREIA"
      }
    ]
  },
  {
    "codigo": "B",
    "vagas": 60,
    "alunosMatriculados": 13,
    "disciplina": {
      "codigo" : "EST0023",
      "nome" : "PROBABILIDADE E ESTATÍSTICA",
      "cargaHoraria" : 60,
      "unidade" : "EST"
    },
    "horarios": [
      {
        "dia": "SEG",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      },
      {
        "dia": "QUA",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      }
    ],
    "professores": [
      {
        "nome": "HELTON SAULO BEZERRA DOS SANTO"
      }
    ]
  },
  {
    "codigo": "A",
    "vagas": 20,
    "alunosMatriculados": 20,
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
        "horaFim": "11:50"
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
  },
  {
    "codigo": "A",
    "vagas": 40,
    "alunosMatriculados": 0,
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
  },
  {
    "codigo": "C",
    "vagas": 20,
    "alunosMatriculados": 0,
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
        "horaFim": "17:50"
      }
    ],
    "professores": [
      {
        "nome": "FERNANDO LESSA CARNEIRO"
      }
    ]
  },
  {
    "codigo": "D",
    "vagas": 20,
    "alunosMatriculados": 0,
    "disciplina": {
      "nome": "FISICA 2 EXPERIMENTAL",
      "codigo": "IFD0177",
      "cargaHoraria": 60,
      "unidade": "IFD"
    },
    "horarios": [
      {
        "dia": "SEG",
        "horaInicio": "00:00",
        "horaFim": "09:50"
      },
      {
        "dia": "SEG",
        "horaInicio": "10:00",
        "horaFim": "11:50"
      }
    ],
    "professores": [
      {
        "nome": "PEDRO AUGUSTO MATOS RODRIGUES"
      }
    ]
  },
  {
    "codigo": "A",
    "vagas": 65,
    "alunosMatriculados": 0,
    "disciplina": {
      "nome": "CÁLCULO 3",
      "codigo": "MAT0027",
      "cargaHoraria": 90,
      "unidade": "MAT"
    },
    "horarios": [
      {
        "dia": "SEG",
        "horaInicio": "14:00",
        "horaFim": "15:50"
      },
      {
        "dia": "QUA",
        "horaInicio": "14:00",
        "horaFim": "15:50"
      },
      {
        "dia": "SEX",
        "horaInicio": "14:00",
        "horaFim": "15:50"
      },
    ],
    "professores": [
      {
        "nome": "CLAUS AKIRA MATSUSHIGUE"
      }
    ]
  },
  {
    "codigo": "J",
    "vagas": 90,
    "alunosMatriculados": 0,
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
  },    
] as Array<IClassesResponse>;

function search(codigo: string): Array<IClassesResponse> {
  const filtered: Array<IClassesResponse> = classes.filter((_class) => {
    if (_class.disciplina.codigo.toLowerCase() === codigo.toLowerCase()) {
      return _class;
    }
    
    return false;
  });

  return filtered;
}


export function getClasses(codigo: string): Promise<Array<IClassesResponse>> {
  const classesFiltered = search(codigo);
  

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(classesFiltered);
    }, 500);
  });
}
