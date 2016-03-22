angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

      .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  .state('registrar', {
    url: '/registrar',
    templateUrl: 'templates/registrar.html',
    controller: 'registrarCtrl'
  })
  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })
  .state('recursos', {
    url: '/recursos',
    templateUrl: 'templates/recursos.html',
    controller: 'recursosCtrl'
  })
  .state('recursoDetalle', {
    url: '/recursoDetalle',
    templateUrl: 'templates/recursoDetalle.html',
    controller: 'recursoDetalleCtrl'
  })
  .state('menu.recurso', {
    url: '/recurso/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recurso.html',
        controller: 'recursoCtrl'
      }
    }
  })

  .state('menu.etiquetas', {
    url: '/etiquetas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/etiquetas.html',
        controller: 'etiquetasCtrl'
      }
    }
  })

  .state('comentarios', {
    url: '/comentarios',
    templateUrl: 'templates/comentarios.html',
    controller: 'comentariosCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});