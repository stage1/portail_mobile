angular.module('branchementApp')
  .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('accueil', {
            url: '/accueil',
            template: '<accueil></accueil>'
        })
    
      .state('authentif', {
          url: '/authentif',
          template: '<authentif></authentif>'
      })
      
      ;
      $urlRouterProvider.otherwise("/authentif");
  });
