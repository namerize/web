var app = angular.module("namerize", ["firebase"]);

app.controller("MessageCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://namerize.firebaseio.com/messages");

  // create a synchronized array
  $scope.messages = $firebaseArray(ref);

  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };

  // click on `index.html` above to see $remove() and $save() in action
});




