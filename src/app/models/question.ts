export class Question {
  idQuestion: number;
  libelleQuestion: string;
  numeroQuestion: number;
  photo: string;
  // Clés étrangères :
  idQuestionnaire: number;
  idReponse: number;
  constructor(
    idQuestion: number,
    libelleQuestion: string,
    numeroQuestion: number,
    photo: string,
    idQuestionnaire: number,
    idReponse: number
  ) {
    this.idQuestion = idQuestion;
    this.libelleQuestion = libelleQuestion;
    this.numeroQuestion = numeroQuestion;
    this.photo = photo;
    this.idQuestionnaire = idQuestionnaire;
    this.idReponse = idReponse;
  }
}
