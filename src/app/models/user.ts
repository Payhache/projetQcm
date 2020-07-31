export class User {
  idUtilisateur: number;
  pseudo: string;
  password: string;
  nom: string;
  prenom: string;
  // Clés Etrangéres :
  idProfil: number;
  idReponse: number;
  constructor(
    idUtilisateur: number,
    pseudo: string,
    password: string,
    nom: string,
    prenom: string,
    idProfil: number,
    idReponse: number
  ) {
      this.idUtilisateur = idUtilisateur;
      this.pseudo = pseudo;
      this.password = password;
      this.nom = nom;
      this.prenom = prenom;
      this.idProfil = idProfil;
      this.idReponse = idReponse;
}
}
