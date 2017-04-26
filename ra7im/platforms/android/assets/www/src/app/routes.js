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
     .state('detailbranchement', {
         url: '/detailbranchement',
         template: '<detailbranchement></detailbranchement>'
          })

       .state('deposereclamation', {
           url: '/deposereclamation',
           template: '<deposereclamation></deposereclamation>'
       })
         
      ;
      $urlRouterProvider.otherwise("/authentif");
  });
