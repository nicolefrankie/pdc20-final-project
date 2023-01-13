(function() {
    angular
      .module("myApp", [])
      .controller("FormController", FormController);

    FormController.$inject = ["$scope"];
  
    function FormController($scope) {
      var vm = this;
      vm.user = {};
    }
      vm.register = function() {
        console.log("Registering with email: " + vm.user.email);
        // send registration request to server
    }  
})