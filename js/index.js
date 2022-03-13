const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
console.log (listaSelecaoPokemons)
const cartoesPokemon = document.querySelectorAll('.cartao-pokemon')
console.log (cartoesPokemon)

listaSelecaoPokemons.forEach(pokemon => {
	pokemon.addEventListener('click', () => {
		console.log (pokemon)

		const cartaoPokemonAberto = document.querySelector('.aberto')
		cartaoPokemonAberto.classList.remove('aberto')

		const idPokemonSelecionado = pokemon.attributes.id.value

		const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
		cartaoPokemonParaAbrir.classList.add('aberto')


		const pokemonAtivoNaListagem = document.querySelector('.ativo')
		pokemonAtivoNaListagem.classList.remove('ativo')

		const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
		pokemonSelecionadoNaListagem.classList.add('ativo')
	})
})