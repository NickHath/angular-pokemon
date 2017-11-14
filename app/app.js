// bring in dependencies -- we dont have any, so []
// arg names to functions are ENFORCED by angular
angular.module('pokemon', []).controller('listCtrl', function($scope) {
  $scope.name = 'Pokemon List';
  $scope.card = {
    name:'Pikachu',
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BjyF2HMWR8a-uocWUjEt0FS65HhBtuh2AKkmuBs6Hp_CjhjI',
    type:'electric',
    stats:{
      "hp":270,
      "atk":52,
      "def":34
      }
    }
});
