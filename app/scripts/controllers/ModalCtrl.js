(function() {
  function ModalCtrl($uibModalInstance, $cookies, Room) {
    var ctrl = this;
   
    ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    }
  
    ctrl.ok = function () {
        //need to add room?
        console.log(ctrl.newRoom);
        Room.add(ctrl.newRoom);
        $uibModalInstance.close('close');
    }
    
    ctrl.newName = function () {
        if (ctrl.newUserName != undefined && ctrl.newUserName != '' ){
            console.log(ctrl.newUserName);
            $cookies.put('blocChatCurrentUser', ctrl.newUserName);
            $uibModalInstance.close('close');
        }
    }
}
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', '$cookies', 'Room', ModalCtrl]);
}) ();