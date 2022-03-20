const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("detectivepikachu.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            pokeNombre(data.species.name);
            let pokeImg = data.sprites.front_shiny;

            pokeImage(pokeImg);
            console.log(pokeImg);

            pokeStats0(data.stats[0].base_stat)
            pokeStats1(data.stats[1].base_stat)
            pokeStats2(data.stats[2].base_stat)
            pokeStats3(data.stats[3].base_stat)
            pokeStats4(data.stats[4].base_stat)
            pokeStats5(data.stats[5].base_stat)

            moves0(data.moves[0].move.name)
            moves1(data.moves[1].move.name)
            moves2(data.moves[2].move.name)
            moves3(data.moves[3].move.name)

            pokeTipo1(data.types[0].type.name)
            pokeTipo2(data.types[1].type.name)
        }
    });
}

const moves0 = (moves) => {
    const pokePhoto = document.getElementById("moves0");
    pokePhoto.value = moves;
}

const moves1 = (moves) => {
    const pokePhoto = document.getElementById("moves1");
    pokePhoto.value = moves;
}

const moves2 = (moves) => {
    const pokePhoto = document.getElementById("moves2");
    pokePhoto.value = moves;
}

const moves3 = (moves) => {
    const pokePhoto = document.getElementById("moves3");
    pokePhoto.value = moves;
}

const pokeStats0 = (stat) => {
    const pokePhoto = document.getElementById("stats0");
    pokePhoto.value = stat;
}

const pokeStats1 = (stat) => {
    const pokePhoto = document.getElementById("stats1");
    pokePhoto.value = stat;
}

const pokeStats2 = (stat) => {
    const pokePhoto = document.getElementById("stats2");
    pokePhoto.value = stat;
}

const pokeStats3 = (stat) => {
    const pokePhoto = document.getElementById("stats3");
    pokePhoto.value = stat;
}

const pokeStats4 = (stat) => {
    const pokePhoto = document.getElementById("stats4");
    pokePhoto.value = stat;
}

const pokeStats5 = (stat) => {
    const pokePhoto = document.getElementById("stats5");
    pokePhoto.value = stat;
}
const pokeTipo1 = (tipo) => {
    const pokePhoto = document.getElementById("tipo");
    const pokefoto = document.getElementById("tipo2");
    pokePhoto.value = tipo;
    pokefoto.value = tipo;
}

const pokeTipo2 = (tipo) => {
    const pokePhoto = document.getElementById("tipo2");
    pokePhoto.value = tipo;
}

const pokeNombre = (nombre) => {
    const pokePhoto = document.getElementById("nombre");
    pokePhoto.value = nombre;
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}


var input = document.getElementById("pokeName");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});