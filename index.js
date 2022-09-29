const h1 = document.getElementById("nombre");
const h3 = document.getElementById("ingredientes");
const h4 = document.getElementById("precio");
const input = document.querySelector("input");
const btnEnviar = document.getElementById("enviar");
const contenedor = document.getElementById("contenedor");
const cards = document.getElementById("cards")
let pizzas = [
    {
        id: 1,
        nombre: 'La Muza',
        ingredientes: ['Tomate', 'Mozzarella', 'Condimento'],
        precio: 1400,
        images: ["./muza.jpg"]
    },
    {
        id: 2,
        nombre: 'Cebollin',
        ingredientes: ['Tomate', 'Mozzarella', 'Cebolla', 'Jamon'],
        precio: 1700,
        images: ["./cebollin.jpg"]
    },
    {
        id: 3,
        nombre: 'SuperQueso',
        ingredientes: ['Tomate', 'Mozzarella', 'Roquefort', 'Cheddar', 'Queso Gourmet'],
        precio: 2100,
        images: ["./queso.jpg"]
    },
    {
        id: 4,
        nombre: 'American',
        ingredientes: ['Panceta', 'Cheddar', 'Barbacoa'],
        precio: 1700,
        images: ["./american.jpg"]
    },
    {
        id: 5,
        nombre: 'La Especial',
        ingredientes: ['Mozzarella', 'Trucha', 'Anchoas'],
        precio: 500,
        images: ["./anchoas.jpg"]
    },
    {
        id: 6,
        nombre: 'La Economica',
        ingredientes: ['Tomate', 'Medio Morron'],
        precio: 350,
        images: ["./economica.jpg"]
    },
]

let menupizza = JSON.parse(localStorage.getItem("pizza")) || [];

const saveLocalStorage = () => {
  localStorage.setItem('pizza', JSON.stringify(menupizza))
};

btnEnviar.addEventListener("click", enviarId);

function enviarId(e) {
  e.preventDefault();
  const pizzaId = parseInt(input.value);
  if (!pizzaId) {
    mostrarAlerta("Elegí una pizza del menu (Tenemos hasta 6)");
    reset();
    return; 
  }
  
  if (pizzaId <= 0 || pizzaId > pizzas.length) {
    mostrarAlerta("Elegí una pizza del menu (Tenemos hasta 6)");
    reset();
    return; 
  }
 
  const resultado = pizzas.find((pizza) => pizza.id === pizzaId);
  renderPizza(resultado); 
}

const renderPizza = (pizza) => {
  cards.innerHTML=
  `
  <img src=${pizza.images} style="height:190px" alt=${pizza.nombre}>
      <div class="card-body">
          <h2>${pizza.nombre}</h2>
          <h4>$${pizza.precio}</h4>
          <p>Ingredientes: ${pizza.ingredientes}</p>
      </div>
  `
};


const mostrarAlerta = (mensaje) => {
  const existeAlerta = document.querySelector(".m-auto");
  if (!existeAlerta) {
    const divAlert = document.createElement("div");
    divAlert.classList.add("text-center", "m-auto");
    divAlert.innerHTML = `
    <p class="alert">${mensaje}</p>
    `;
    contenedor.appendChild(divAlert);
    setTimeout(() => {
      divAlert.remove();
    }, 3000);
  }
};

const reset = () => {
  h1.innerHTML = "";
  h3.innerHTML = "";
  h4.innerHTML = "";
};

