(function() {   
function HomeCtrl($scope, Room, $uibModal) {
       //var home = this;
        
        $scope.roomList = Room.all;
//            [{name: 'Room 1'}, {name: 'Room 2'}, {name: 'Room 3'}];
               
        $scope.open = function() {
                $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
    })();


