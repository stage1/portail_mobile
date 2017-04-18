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
     .state('branchement', {
         url: '/branchement',
         template: '<branchement></branchement>'
          })

      .state('listfactimpayees', {
          url: '/listfactimpayees',
          template: '<listfactimpayees></listfactimpayees>'
      })
      .state('listenotifications', {
          url: '/listenotifications',
          template: '<listenotifications></listenotifications>'
      })
      .state('listreclencours', {
          url: '/listreclencours',
          template: '<listreclencours></listreclencours>'
      })
      .state('listreclrejetees', {
          url: '/listreclrejetees',
          template: '<listreclrejetees></listreclrejetees>'
      })
      
      ;
      $urlRouterProvider.otherwise("/authentif");
  });
