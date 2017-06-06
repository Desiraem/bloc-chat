(function() {   
function HomeCtrl($scope, Room, Message, $uibModal ) {
       //var home = this;
        
        $scope.roomList = Room.all;
//            [{name: 'Room 1'}, {name: 'Room 2'}, {name: 'Room 3'}];

        $scope.currentRoom = {};

        $scope.open = function() {
            Room.setCurrentUser();
            if (Room.currentUser != '' && Room.currentUser != undefined ){
                $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
            }
        };
    
        $scope.setCurrentRoom = function(room) {
            Room.setCurrentUser();
            if (Room.currentUser ){
                $scope.currentRoom = room; 
                console.log(room.$id);
                $scope.currentMessages = Message.getByRoomId(room.$id);
            }
        };
            
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal',  HomeCtrl]);
    })();


