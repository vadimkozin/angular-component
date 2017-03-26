var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'ngResource', 'restangular', 'ui.bootstrap', 'ngMaterial']);

angular.
module('PokemonApp')

.config(['$routeProvider', 'RestangularProvider',
    function config($routeProvider, RestangularProvider) {

        $routeProvider.
        when('/pokemons', {
            template: '<pokemon-list></pokemon-list>'
        }).
        when('/pokemons/:pokemonId', {
            template: '<pokemon-detail></pokemon-detail>'
        
        }).
        /*
        when('/pokemons/:pokemonId', {
            templateUrl: 'src/PokemonDetail/PokemonDetail.html',
            controller: 'PokemonDetailCtrl'
        }).
        */
        when('/edit/:pokemonId', {
            templateUrl: 'src/EditPokemon/EditPokemon.html',
            controller: 'EditPokemonCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });

        RestangularProvider.setBaseUrl('https://api.backendless.com/v1/data/');

    }
])

.config(['$httpProvider', function($httpProvider) {

    $httpProvider.defaults.headers.common = {
        "application-id": "49FFA7FB-3DAE-0943-FF79-68E3AA886F00",
        "secret-key": "BAF58198-6B37-F61D-FFA2-D1D654719400"
    };

}]);
