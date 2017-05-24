    function HomeCtrl($scope, Room) {
        $scope.roomList = Room.all
//            [{name: 'Room 1'}, {name: 'Room 2'}, {name: 'Room 3'}];
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);

