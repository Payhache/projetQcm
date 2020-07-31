# Projet QCM pour Laboratoire de l'hôpital Nord 
(This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.)

### Modification du 31/07/2020
* Création du projet
  * génération du projet Angular
  * création des composants :
      * Login : Permet à l'utilsateur de se logger si il posséde déja un compte ou de s'inscrire.
      * Subscribe : Permet à l'utilisateur de s'inscrire
      * qcm-themes : Premiére page où l'utilisateur arrive et peut choisir son thème
      * qcm-choice : Aprés avoir choisit le théme l'utilisateur choisit son questionnaire
      * qcm-questions : Questionnaire à proprement parlé
   * Création de classes : 
        * answer pour les réponses 
        * profile pour les profil utilisateur 
        * question pour les questions
        * quiz pour le questionnaire 
        * theme pour les themes
        * user pour l'utilisateur

---
#### TODO :
* Création des services
* Remplissage des contenus (sans logique BDD pour le moment)
* Création d'un fichier JSON qui servira de BDD pour tester la logique
* Création de la logique

##### Modifs

- titre Laboratoire de pharmacologie toxicologie gaz du sang sur la page d'acceuil .

---

### Modification du 28/07/2020

* ajout des fonctionnalités sur le questionnaire : 
    * un utilisateur peut revenir en arriére ou sauter une question.
    * le questionnaire posséde un temps limite pour sa réalisation
    * Une question peut posséder une photo
    * Une réponse peut contenir jusqu'à 3 photos maximum

---


## Fonctionnement du questionnaire :

Création d'une **QCM** pour le laboratoire de l'Hopital Nord de Saint-Etienne. Ce questionnaire servira à l'habilitation des internes lors de leur cursus, et des techniciens lors de leur arrivée au laboratoire. il devra permettre :

- de vérifier leur connaissance sur les sujets souhaités.
- de monter en compétence sur les sujets souhaités.

L'utilisateur devra pouvoir s'inscrire seul sur la plateforme. L'application devra donc être en mesure de gerer le stockage et la vérification des données via une basse de donnée (BDD). Lors de son inscription il devra remplir :

- Un pseudo (qui sera _unique_ en BDD et servira d'identifiant)
- Un nom
- Un prénom
- Un role (Technicien ou Interne)
- Un mot de passe (qui devra être vérifié deux fois en cas d'erreure de saisie)
- Une clé communiquée par le service afin que seul les gens du service concerné puisse s'inscire.

Une fois inscrit l'utilisateur devra pouvoir se logger et accéder aux thèmes et questionnaires qui lui sont liés. La page d'acceuil aprés login sera donc une selection des différents thémes.

Aprés la sélection des thémes l'utilisateur arrive sur la liste des questionnaires liés. Il peut voir si

- Si il a déja fait le questionnaire
- Si il posséde un questionnaire en cours (commencé mais pas finit)
- Si le questionnaire est finit il voit si il est réussit ou échoué (couleur plus résultat en nbre de bonne réponse / questions)

Lorsque l'utilisateur fait son questionnaire, il peut revenir en arriére ou sauter une question. Cependant, le questionnaire global à une limite de temps.

Les questions peuvent : 
* Contenir une photo lié à la question
* Etre évitées pour ensuite revenir dessu . 

Les réponses peuvent : 
* Avoir jusqu'à 3 photos dans les explications. 

L'administrateur doit être en mesure :

- d'ajouter des questions ou des thémes
- de modifier des questions ou des thémes
- de supprimer des questions ou des thémes
- d'éditer des questions ou des thémes
- Consulter les résultats de tous les utilisateurs.
- de changer les rôles de utilisateurs (Interne / Technicien / Admin)

---



### A faire

15 jour avoir le CRUD réalisé :

- Essayer de comprendre le code de trucmuch (https://www.codeproject.com/Articles/1167451/Quiz-Application-in-Angular)
- _Se former sur l'utilisation de **GIT** à plusieurs_
- définir la structure ANGULAR du projet
- BDD ? -> Firebase PH pour voir par rapport au fichier JSON et aux requétes HTTP
