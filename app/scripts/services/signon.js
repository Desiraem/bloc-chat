(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        // Modal configuration object properties
          templateUrl: '/templates/signon.html',
          controller: 'ModalCtrl as modal'

      })
    } 
      else {
        $cookies.remove('blocChatCurrentUser');
        $uibModal.open({
        // Modal configuration object properties
        templateUrl: '/templates/signon.html',
        controller: 'ModalCtrl as modal'
      })
} 
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
