export class Profile {
  idProfil: number;
  libelleProfil: number;
  // Clés étrangères :
  idQuestionnaire: number;
  idUtilisateur: number;
  constructor(
    idProfil: number,
    libelleProfil: number,
    idQuestionnaire: number,
    idUtilisateur: number
  ) {
    this.idProfil = idProfil;
    this.libelleProfil = libelleProfil;
    this.idQuestionnaire = idQuestionnaire;
    this.idUtilisateur = idUtilisateur;
  }
}
