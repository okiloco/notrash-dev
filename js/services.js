angular.module('app.services', [])

.factory('fbRef', ["$firebaseAuth",function($firebaseAuth){
	var ref=new Firebase("https://incandescent-inferno-5056.firebaseio.com/users");
	return ref;
}]).
factory('sessvars',["$cookies",function($cookies){
	var userData=null;
	return{
		setCookieData:function(authData){
			userData=userData
			$cookies.put("userdata", authData);
		},
		getCookieData: function() {
			userData = $cookies.get("userdata");
			return userData;
		},
		clearCookieData: function() {
			userData = null;
			$cookies.remove("userdata");
		}
	}
}])

.service('BlankService', [function(){

}]);

