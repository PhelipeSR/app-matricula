export interface IResponse {
  codigo: string;
  nome: string;
  cargaHorariaTotal: number;
  unidadeAcademica: string
}

function search(str: string): Array<IResponse> {

  const filtered: Array<IResponse> = offerList.filter((discipline) => {
    const nome = removeAccentsLowerCase(discipline.nome.toLowerCase());
    const codigo = removeAccentsLowerCase(discipline.codigo.toLowerCase());
    const query = removeAccentsLowerCase(str.toLowerCase());

    if (nome.indexOf(query) >= 0 || codigo.indexOf(query) >= 0) {
      return discipline;
    }

    return false;
  });

  return filtered;
}

function removeAccentsLowerCase(str: string) {
  var map = {
      '-' : ' ',
      'a' : 'á|à|ã|â|À|Á|Ã|Â',
      'e' : 'é|è|ê|É|È|Ê',
      'i' : 'í|ì|î|Í|Ì|Î',
      'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
      'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      'c' : 'ç|Ç',
      'n' : 'ñ|Ñ'
  };
  
  for (var pattern in map) {
      str = str.replace(new RegExp(map[pattern as keyof typeof map], 'g'), pattern);
  };

  return str;
}

const offerList = [
  {
    "codigo" : "ENE0026",
    "nome" : "INTRODUÇÃO A ENGENHARIA DE REDES DE COMUNICACÃO",
    "cargaHorariaTotal" : 30,
    "unidadeAcademica" : "ENE"
  }, {
    "codigo" : "ENE0334",
    "nome" : "COMPUTACAO PARA ENGENHARIA",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "ENE"
  }, {
    "codigo" : "IFD0171",
    "nome" : "FISICA 1",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "IFD"
  }, {
    "codigo" : "IFD0173",
    "nome" : "FISICA 1 EXPERIMENTAL",
    "cargaHorariaTotal" : 30,
    "unidadeAcademica" : "IFD"
  }, {
    "codigo" : "MAT0025",
    "nome" : "CÁLCULO 1",
    "cargaHorariaTotal" : 90,
    "unidadeAcademica" : "MAT"
  }, {
    "codigo" : "MAT0031",
    "nome" : "INTRODUCAO A ALGEBRA LINEAR",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "MAT"
  }, {
    "codigo" : "ENE0013",
    "nome" : "ALGORITMOS E ESTRUTURA DE DADOS",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "ENE"
  }, {
    "codigo" : "EST0023",
    "nome" : "PROBABILIDADE E ESTATÍSTICA",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "EST"
  }, {
    "codigo" : "IFD0175",
    "nome" : "FISICA 2",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "IFD"
  }, {
    "codigo" : "MAT0026",
    "nome" : "CÁLCULO 2",
    "cargaHorariaTotal" : 90,
    "unidadeAcademica" : "MAT"
  }, {
    "codigo" : "ENE0039",
    "nome" : "SISTEMAS DIGITAIS",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "ENE"
  }, {
    "codigo" : "ENE0040",
    "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS",
    "cargaHorariaTotal" : 30,
    "unidadeAcademica" : "ENE"
  }, {
    "codigo" : "ENE0022",
    "nome" : "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "ENE"
  }, {
    "codigo" : "ENE0274",
    "nome" : " FUNDAMENTOS DE REDES",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "ENE"
  }, {
    "codigo" : "IFD0177",
    "nome" : "FISICA 2 EXPERIMENTAL",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "IQD"
  }, {
    "codigo" : "MAT0027",
    "nome" : "CÁLCULO 3",
    "cargaHorariaTotal" : 90,
    "unidadeAcademica" : "MAT"
  },
] as Array<IResponse>;


export function getOfferList(query: string): Promise<Array<IResponse>> {

  const offerListFiltered = search(query);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(offerListFiltered);
    }, 400);
  });
}
