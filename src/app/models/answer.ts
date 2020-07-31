export class Answer {
  idReponse: number;
  lettreReponse: string;
  estBonne: boolean;
  explication: string;
  photo1: string;
  photo2: string;
  photo3: string;
  //   Clés étrangères :
  idUtilisateur: number;
  idQuestion: number;

  constructor(
    idReponse: number,
    lettreReponse: string,
    estBonne: boolean,
    explication: string,
    photo1: string,
    photo2: string,
    photo3: string,
    idUtilisateur: number,
    idQuestion: number
  
  ) {
    this.idReponse = idReponse;
    this.lettreReponse = lettreReponse;
    this.estBonne = estBonne;
    this.explication = explication;
    this.photo1 = photo1;
    this.photo2 = photo2;
    this.photo3 = photo3;
    this.idUtilisateur = idUtilisateur;
    this.idQuestion = idQuestion;
  }
}
