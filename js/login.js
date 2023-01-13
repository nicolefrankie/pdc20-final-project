(function() {
    angular
      .module("myApp", [])
      .controller("FormController", FormController);
  
    FormController.$inject = ["$scope"];
  
    function FormController($scope) {
      var vm = this;
      vm.user = {};
  
      vm.login = function() {
        console.log("Logging in with email: " + vm.user.email);
        // send login request to server
      };
    }
})();  