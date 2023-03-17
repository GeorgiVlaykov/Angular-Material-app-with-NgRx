# Angular app with Material, Angularfire and NgRx

Angular Application developed during the course ['Angular (Full App) with Angular Material, Angularfire &amp; NgRx'](https://www.udemy.com/course/angular-full-app-with-angular-material-angularfire-ngrx/?utm_source=adwords&utm_medium=udemyads&utm_campaign=WebDevelopment_v.PROF_la.EN_cc.ROWMTA-A_ti.8322&utm_content=deal4584&utm_term=_._ag_77741649963_._ad_533999949985_._kw__._de_c_._dm__._pl__._ti_dsa-774930035449_._li_1001470_._pd__._&matchtype=&gclid=Cj0KCQiA0oagBhDHARIsAI-Bbgesh6KuKBKxaIAz6Bh7vt0Ywu34vQNxdJA1Y3zCBo1qLk7DL3BARcQaAtKoEALw_wcB) created by Academind with instructor Maximilian Schwarzmüller.

## Project Modules, Components and Functionalities

- App Module, containing the responsive HeaderComponent and SidNav, with example of protected child routes to Training module using CanMatchFn. Default welcome screen for the / route can be found in the WelcomeComponent
- Shared Module with a reusable Material Snackbar and load spinner observable for while fetchin data from Firestore
- Authentication Module with basic login, logout and signup functionalities
- Training module contains a simple excersize starter, that fetches different exercises from Firestore. Example data can be found in src\app\data.json file. CurrentTrainingComponent displays the progress of the started workout (the time the pogress spinner needs to get to 100% varies on the exercise's data). Completed and Cancelled exercises are then stored in Realtime Database together with the progress and displayed with the help of PastTrainingComponent, which visualizes them in a sortable table.

## Course Description

Angular is an amazing frontend JavaScript & TypeScript framework with which you can build powerful web applications.
There are a lot of courses that dive deeply into Angular but sometimes you just want to build an entire app and see how it all works in practice. And you want to use all these great third-party packages that can add a lot of awesome functionalities to your Angular app!

We'll build an entire, realistic app which looks absolutely beautiful, uses Google's Material Design and is extremely fast! Thanks to Firebase and Angularfire, we'll add real-time database functionalities and see our updates almost before we make them!

Behind the scenes, NgRx will be used - a Redux-inspired state management solution that can greatly enhance your Angular app.
What are you waiting for, this is what you'll get in detail:

- A brief refresher on Angular, just in case you forgot how it works (or never learned it)
- A detailed introduction into Angular Material, its docs and its usage
- A realistic app that uses many Angular Material components
- Examples for components like Datepickers, Sidenavs or the Material Data Table (incl. sorting, filtering and live updating!)
- A real-time database connection powered by Firebase (using Firestore) and Angularfire
- A better understanding of RxJS observables
- State-of-the-art state management with the help of NgRx And so much more!

This course is for you if you want to practice Angular, want to see it in action or want to learn it with the help of a 100% practical project!

# Angmaterial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

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
