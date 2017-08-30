app.controller("mainController", function ($scope, $http) {

    $scope.init = function () {
        $scope.hashtag = '#wow';
        $scope.tweets = [];
    };

    $scope.getToken = () => {
        $http.get('/getToken/' + encodeURIComponent($scope.hashtag))
            .then(function (data) {
                console.log(data);
                $scope.tweets=data.data.statuses;
            })
            .catch(function (data) {
                console.log('Error: ' + data);
            });
    }

});

