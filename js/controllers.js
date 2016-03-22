angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope,fbRef,$firebaseAuth,$state,$ionicPopup,sessvars,$sessionStorage,$localStorage,$ionicHistory,$location) {

	$scope.user=null;
	var fbAuth=$firebaseAuth(fbRef);
	fbRef.onAuth(function(authData) {
	  if (authData) {
	    // $state.go("recursos");
	    $location.url("/recursos");
	    $ionicHistory.nextViewOptions({
          disableBack: true
        });
	  } else {
	    console.log("Client unauthenticated.")
	  }
	});

	$scope.login=function(username,password){
		fbAuth.$authWithPassword({
			email:username,
			password:password
		}).then(function(authData){
			sessvars.setCookieData(authData);

			$localStorage.authData=authData;
            $sessionStorage.authData=authData;
            console.log($sessionStorage.authData)

			$state.go("recursos");
		}).catch(function(error){
			var msg="";
			switch(error.code){
				case "INVALID_EMAIL":
					msg="La dirección de correo es invalida.";
				break;
				case "INVALID_PASSWORD":
					msg="Contraseña incorrecta"
				break;
				default:
					msg:"error";
				break;
			}
		   $ionicPopup.alert({
		      title: 'Atención',
		      subTitle:"Error",
		      okType:"button-assertive",
		      template: msg,
		   }).then(function(res) {
		     $scope.clearForm();
		   });
		});
	}

	$scope.clearForm=function(){
		$scope.username="";
		$scope.password="";
		console.log("Limpaiar")
	}

	$scope.$on('angularFireAuth:login', function(authData) { 
		console.log(authData)
	});
})
   
.controller('registrarCtrl', function($scope,$state,fbAuth) {
	$scope.register=function(username,password){
		fbAuth.$createUser({email:username,password:password}).then(function(userData){
			return fbAuth.$authWithPassword({
				username:username,
				password:password
			}).then(function(authData){
				sessvars.setCookieData(authData);
				$state.go("recursos");
			}).catch(function(error){
				console.error("ERROR: "+error);
			})
		}).then(function(){
			$state.go("recursos");
		}).catch(function(error){
			console.error("ERROR: "+error);
		})
	}
})
      
.controller('recursosCtrl', function($scope) {

})
   
.controller('recursoDetalleCtrl', function($scope) {

})
   
.controller('recursoCtrl', function($scope) {

})
   
.controller('etiquetasCtrl', function($scope) {

})
   
.controller('comentariosCtrl', function($scope) {

})
 