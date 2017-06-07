(function() {
    function Message($firebaseArray, Room) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
            
        Message.getByRoomId = function(roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));   
        };
        
        Message.send = function(newMessage, roomId, time) { 
            console.log(newMessage);
            messages.$add({content: newMessage, username: Room.currentUser, roomId: roomId, sentAt: time });
        };
        
        return Message;
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', 'Room',  Message]);
})();
