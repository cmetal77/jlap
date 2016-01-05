//https://www.googleapis.com/calendar/v3/calendars/7fsrvrge836mjmtarhiqbqcjs8%40group.calendar.google.com/events?key=AIzaSyChzZmHr3w55jjkwbpWwqGGa22cSqAH0-E
var app = angular.module('jlap', ['ui.calendar', 'ngAnimate', 'ui.bootstrap']);

app.controller('test', ['$scope', '$uibModal', function($scope, $uibModal) {
  var vm = this;

  $scope.open = function() {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'eventEditor.html',
      controller: 'eventEditorController',
      size: 'lg'
    });

    modalInstance.result.then(function() {

    }, function() {

    });
  }

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  $scope.events = [{
    title: 'All Day Event',
    start: new Date(y, m, 1)
  }, {
    title: 'Long Event',
    start: new Date(y, m, d - 5),
    end: new Date(y, m, d - 2)
  }, {
    id: 999,
    title: 'Repeating Event',
    start: new Date(y, m, d - 3, 16, 0),
    allDay: false
  }, {
    id: 999,
    title: 'Repeating Event',
    start: new Date(y, m, d + 4, 16, 0),
    allDay: false
  }, {
    title: 'Birthday Party',
    start: new Date(y, m, d + 1, 19, 0),
    end: new Date(y, m, d + 1, 22, 30),
    allDay: false
  }, {
    title: 'Click for Google',
    start: new Date(y, m, 28),
    end: new Date(y, m, 29),
    url: 'http://google.com/'
  }];

  $scope.alertEventOnClick = function(date, jsEvent, view) {
    $scope.open();
  }

  $scope.uiConfig = {
    calendar: {
      height: 450,
      editable: true,
      header: {
        center: 'title',
        right: 'today prev,next'
      },
      dayClick: $scope.alertEventOnClick,
      eventClick: $scope.alertEventOnClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize
    }
  }

  $scope.eventSources = [$scope.events];
}]);

app.controller('eventEditorController', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
  $scope.ok = function() {
    $uibModalInstance.close();
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss();
  };
}]);
