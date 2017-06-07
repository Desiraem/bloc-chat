(function() {   
function HomeCtrl($scope, Room, Message, $uibModal, $filter ) {
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
    
        $scope.setCurrentTime = function(){
            $scope.currentTime = $filter('date')(new Date(), 'dd/MM/yyyy HH:mm:ss');
        }
        
        $scope.sendMessage = function(message) {
          //use new functions in Message.send(message)
            $scope.setCurrentTime();
            Message.send(message, $scope.currentRoom.$id, $scope.currentTime);
            $scope.newMessage = '';
        };
            
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', '$filter',  HomeCtrl]);
    })();


