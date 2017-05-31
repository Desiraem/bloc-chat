(function() {
  function ModalCtrl($uibModalInstance,  Room) {
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
}
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
}) ();