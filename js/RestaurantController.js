bestRestaurant.controller('RestaurantCtrl', function RestataurantCtrl($scope) {
    $scope.restaurants = [];
    $scope.addRestaurant = function() {
        $scope.restaurants.push({ name: $scope.restName,
                               cuisine: $scope.restCuisine,
                               location: $scope.restLocation,
                               price: $scope.restPrice });
        $scope.restName = null;
        $scope.restCuisine = null;
        $scope.restLocation = null;
        $scope.restPrice = null;
    };
    $scope.deleteRestaurant = function(restaurant) {
        var index = $scope.restaurants.indexOf(restaurant);
        $scope.restaurants.splice(index, 1);
    };
});
