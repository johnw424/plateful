(function() {
  angular.module('app.modules.tabs.settings', ['app.modules.tabs.settings.fblogin.controllers']).config(function($stateProvider) {
    return $stateProvider.state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          // templateUrl: 'js/modules/tabs/settings/views/settings.html',
          templateUrl: 'js/modules/tabs/settings/views/fb-login.html',
          // controller: 'SettingsCtrl as vm'
          controller: 'FbLoginCtrl as fb'
        }
      }
    }).state('tab.account', {
      url: '/account',
      views: {
        'tab-settings': {
          templateUrl: 'js/modules/tabs/settings/views/account.html'
        }
      }
    });
  });

}).call(this);
