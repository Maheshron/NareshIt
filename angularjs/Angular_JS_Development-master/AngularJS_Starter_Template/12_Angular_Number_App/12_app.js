var app = angular.module('NumberApp',[]);
app.controller('NumberAppCtrl',function ($scope) {
    $scope.numbers = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT',NINE];
    $scope.enteredNumber = null;
    $scope.textMessage = ' ';
    $scope.getText = function() {
        var strMsg = ' ';
        if($scope.entererdNumber !== undefined){
            for(var i = 0;i<$scope.enteredNumber.length;i++){
                var char = $scope.enteredNumber.charAt(i);
                strMsg +=  $scope.numbers[char];
            }
        }
        $scope.textMessage = strMsg;
    }
})
app.directive('numbersOnly', function() {
    var directive = {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9-]/g, '');
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }

    };
    return directive;
});