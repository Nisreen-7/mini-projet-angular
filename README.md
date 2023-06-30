# MiniProjetAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## On peut faire ça dans un autre projet histoire d'avoir uniquement l'exercice. On créera donc un autre projet avec ng new et on oubliera pas de rajouter le FormsModule dans les imports
Affichage des formes


	
On crée un component ShapeComponent ou autre, on fait du html css dedans pour faire qu'il affiche un carré
	
Dans le AppComponent, on fait un tableau de nom, et dans le template on fait une boucle sur les noms, et pour chaque nom on affiche un app-shape
	
On peut ajouter un petit input et button permettant de rajouter un nouveau nom dans la liste
	
On peut aussi faire du css pour faire que les shapes s'affichent les unes à côté des autres (avec du flex par exemple)

Édition des formes


	
Dans le ShapeComponent, on peut commencer par rajouter une propriété width initialisée à 100
	
Dans le template on fait un input number permettant de mettre à jour cette valeur
	
On assigne la valeur au style du carré en utilisant un [ngStyle] (voir la doc de comment il s'utilise, il faudra préciser l'unité px d'une manière ou d'une autre)
	
On répète le processus pour toutes les valeurs qu'on veut pouvoir modifier

Finitions


	
On rajoute un booléen initialisé à false dans le ShapeComponent et on s'en sert dans le template pour faire qu'avec un ngIf ça affiche ou non les inputs
	
On fait en sorte de pouvoir changer la valeur du booléen au click sur le carré ou sur un bouton ou autre
	
On fait du CSS pour faire que l'affichage soit "bien" (genre moi il est pas si fou que ça)

Autres pistes à creuser si on a tout fini


	
Faire qu'on puisse changer la forme (rond ou carré)
	
Afficher combien de formes on a
	
Faire qu'on puisse modifier l'opacité
	
Faire qu'on puisse ajouter du texte à l'intérieur de la forme
	
Rajouter un bouton X près du titre pour pouvoir supprimer une des formes
	
Faire que quand on passe sa souris sur une des formes, ça affiche ses dimensions sur les côtés comme sur un plan

Bonus difficiles (que je ne corrigerai pas)


	
Faire qu'on puisse déplacer les formes en les glissant-déposant plutôt qu'avec des inputs
	
Faire qu'une forme puisse avoir des "ouvertures" en choisissant haut/bas/droite/gauche
	
Faire qu'une forme puisse contenir d'autres formes

(si je pense à d'autres trucs, je vous les met dans l'aprèm pendant que j'attendrai)

### Auto-apprentissage faisable avant les bonus :
Pour apprendre à utiliser les @Input de Angular (les paramètres de component), faire en sorte que l'affichage du nom de la forme se fasse a l'intérieur du template de celle ci (il faudra donc créer un @Input dans le ShapeComponent et lui passer une valeur depuis la boucle du AppComponent)
À partir de là, si on en veut d'avantage on peut essayer de stocker les valeurs de taille/forme/couleur/position dans le AppComponent aussi sous forme de tableau d'objets plutôt que dans le Shape qui n'aura qu'un @Input. Le formulaire de modification serait dans le AppComponent aussi
