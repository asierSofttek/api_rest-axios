const button = document.querySelector('button')
button.addEventListener('click', getPokemon)

function getPokemon() {
const name = document.querySelector('#name').value;
const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

axios.get(url)
  .then(function (response) {
    if(name!=""){
    console.log(response);
    const resul = response.data;
    const name = resul.name 
    const image = resul.sprites.other['official-artwork'].front_default;
    const type = resul.types.map(type => type.type.name).join(', ');
    const content = `
    <div class="card">
      <img src="${image}" alt="${name}">
      <p><b>Nombre: </b>${name}</p>
      <p> <b>Tipo: </b> ${type}</p>
    </div>
`;
    document.querySelector('#result').innerHTML = content;
    }
    else{
       document.querySelector('#result').innerHTML = `<span class="error">No has escrito ningun nombre.</span>`;
    }
  })
  .catch(function (error) {
    console.log(error)
    document.querySelector('#result').innerHTML = `<span class="error">El pokemon <b>${name}</b> no está en la lista, escribe otro nombre.</span>`;
  })
  .finally(function () {
      console.log("peticion enviada")

  });
}