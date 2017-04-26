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

       .state('deposereclamation', {
           url: '/deposereclamation',
           template: '<deposereclamation></deposereclamation>'
       })
         
      ;
      $urlRouterProvider.otherwise("/authentif");
  });
