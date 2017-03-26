'use strict';

pokemonApp.component('pokemonList', {

    controller: function PokemonListCtrl(PokemonsService, $location) {

        this.pokemons = PokemonsService.query();

        this.goPokemon = function(pokemonId) {
           $location.path('/pokemons/' + pokemonId);
        }

        this.fix = {
            head: 'Список Покемонов',
            subhead: 'выберите покемона'
        }

    },

    templateUrl: './src/PokemonList/PokemonList.html'

});
