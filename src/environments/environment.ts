// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  //1---Conexion con firebase

  //https://console.firebase.google.com/u/1/project/angularfirebasechat-e2505/overview
  firebase: {
    apiKey: "AIzaSyCb1PlFa9QSXZi_8TM7x2rHj9iPC0SLe_0",
    authDomain: "angularfirebasechat-e2505.firebaseapp.com",
    databaseURL: "https://angularfirebasechat-e2505.firebaseio.com",
    projectId: "angularfirebasechat-e2505",
    storageBucket: "angularfirebasechat-e2505.appspot.com",
    messagingSenderId: "510744004510"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
