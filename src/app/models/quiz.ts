export class Quiz {
  idQuestionnaire: number;
  dateCreation: Date;
  dateSoumission: Date;
  estFini: boolean;
  // Clés étrangères :
  idProfil: number;
  idQuestion: number;
  idTheme: number;

  constructor(
    idQuestionnaire: number,
    dateCreation: Date,
    dateSoumission: Date,
    estFini: boolean,
    idProfil: number,
    idQuestion: number,
    idTheme: number
  ) {
    this.idQuestionnaire = idQuestionnaire;
    this.dateCreation = dateCreation;
    this.dateSoumission = dateSoumission;
    this.estFini = estFini;
    this.idProfil = idProfil;
    this.idQuestion = idQuestion;
    this.idTheme = idTheme;
  }
}
