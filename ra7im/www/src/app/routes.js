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
      .state('historeleves', {
          url: '/historeleves',
          template: '<historeleves></historeleves>'
      })
      .state('histonotification', {
          url: '/histonotification',
          template: '<histonotification></histonotification>'
      })
      .state('histofactures', {
          url: '/histofactures',
          template: '<histofactures></histofactures>'
      })
      .state('historeclamation', {
          url: '/historeclamation',
          template: '<historeclamation></historeclamation>'
      })
       .state('deposereclamation', {
           url: '/deposereclamation',
           template: '<deposereclamation></deposereclamation>'
       })
       .state('inscription', {
           url: '/inscription',
           template: '<inscription></inscription>'
       })
       .state('pagelogin', {
           url: '/pagelogin',
           template: '<pagelogin></pagelogin>'
       })
      
      ;
      $urlRouterProvider.otherwise("/pagelogin");
  });
