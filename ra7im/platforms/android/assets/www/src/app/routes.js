angular.module('ra7im')
  .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('accueil', {
            url: '/accueil',
            template: '<accueil></accueil>'
        })
    
      .state('detailsBranchement', {
          url: '/detailsBranchement',
          template: '<detailsBranchement></detailsBranchement>'
      })
      .state('Authentification', {
          url: '/Authentification',
          template: '<Authentification></Authentification>'
      })
      .state('login', {
          url: '/login',
          template: '<login></login>'
      })
      ;
      $urlRouterProvider.otherwise("/login");
  });
