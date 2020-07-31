export class Theme {
  idTheme: number;
  libelleTheme: number;
  // Clés étrangéres :
  idQuestionnaire: number;
  constructor(idTheme: number, libelleTheme: number, idQuestionnaire: number) {
    this.idTheme = idTheme;
    this.libelleTheme = libelleTheme;
    this.idQuestionnaire = idQuestionnaire;
  }
}
