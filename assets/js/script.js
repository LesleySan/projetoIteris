let pokemonName = document.querySelector('.pokemonName');
let pokemonNumber = document.querySelector('.pokemonNumber');
let pokemonImage = document.querySelector('.pokemonImage');

let form = document.querySelector('.form');
let inputSearch = document.querySelector('.inputSearch');

let btnPrev = document.querySelector('.btn-prev');
let btnNext = document.querySelector('.btn-next');

let pokemonSpeed = document.querySelector('pokemonSpeed');

let searchPokemon = 1;



let fetchPokemon = async (pokemon) => {

    let APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status == 200) {
        let data = await APIResponse.json();
        return data;
    }
}


let renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Buscando...';
    pokemonNumber.innerHTML = '';


    let data = await fetchPokemon(pokemon);

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    } else {
        pokemonName.innerHTML = 'Não encontrado';
        pokemonNumber.innerHTML = '';


    }

}

async function returnPokemon(pokemon) {

    if (data) {
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonSpeed.innerHTML = data['stats']['speed'];


    }

}



form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(inputSearch.value.toLowerCase());
    inputSearch.value = '';
});



btnPrev.addEventListener('click', () => {
    alert('prev clicked')

});

btnNext.addEventListener('click', () => {
    alert('next clicked')

});


renderPokemon(searchPokemon)
