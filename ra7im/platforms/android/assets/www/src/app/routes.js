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
      .state('listFactImpayees', {
          url: '/listFactImpayees',
          template: '<listFactImpayees></listFactImpayees>'
      })
      .state('listenotifications', {
          url: '/listenotifications',
          template: '<listenotifications></listenotifications>'
      })
      .state('listReclEncours', {
          url: '/listReclEncours',
          template: '<listReclEncours></listReclEncours>'
      })
      .state('listReclRejetees', {
          url: '/listReclRejetees',
          template: '<listReclRejetees></listReclRejetees>'
      })
      .state('detailsBranchement', {
          url: '/detailsBranchement',
          template: '<detailsBranchement></detailsBranchement>'
      })
      
      ;
      $urlRouterProvider.otherwise("/authentif");
  });
