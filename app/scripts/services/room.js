(function() {
    function Room($firebaseArray, $cookies) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        Room.all = rooms;
        
        Room.add = function(room) {
            //firebase method $add
            rooms.$add(room.name);

        };
        
         
        Room.setCurrentUser = function() {
            Room.currentUser = $cookies.get('blocChatCurrentUser');    
        };
        
        return Room;
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', '$cookies', Room]);
})();
