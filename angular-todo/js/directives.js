angular.module('colorDirective', [])
  .directive('completeColor', function() {
    return {
      restrict: 'A', //attribute
      link: function(scope, element, attrs) {
        scope.$watch(attrs.completeColor, function(value) {
          element.css('color', (value ? 'yellow' : 'limegreen'));
        });
      }
    }
});