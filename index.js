const h1 = document.getElementById("nombre");
const h4 = document.getElementById("precio");
const input = document.querySelector("input");
const btnEnviar = document.getElementById("enviar");
const contenedor = document.getElementById("contenedor");
const pizzas = [
    {
        id: 1,
        nombre: 'La Muza',
        ingredientes: ['Tomate', 'Mozzarella', 'Condimento'],
        precio: 1400
    },
    {
        id: 2,
        nombre: 'Cebollin',
        ingredientes: ['Tomate', 'Mozzarella', 'Cebolla', 'Jamon'],
        precio: 1700
    },
    {
        id: 3,
        nombre: 'SuperQueso',
        ingredientes: ['Tomate', 'Mozzarella', 'Roquefort', 'Cheddar', 'Queso Gourmet'],
        precio: 2100
    },
    {
        id: 4,
        nombre: 'American',
        ingredientes: ['Panceta', 'Cheddar', 'Barbacoa'],
        precio: 1700
    },
    {
        id: 5,
        nombre: 'La Especial',
        ingredientes: ['Mozzarella', 'Trucha', 'Anchoas'],
        precio: 500
    },
    {
        id: 6,
        nombre: 'La Economica',
        ingredientes: ['Tomate', 'Medio Morron'],
        precio: 350
    },
]
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
  const { nombre, precio } = pizza; 
  h2.innerHTML = `<span class= "text-small">Nombre: </span>${nombre}`;
  h4.innerHTML = `<span class= "text-small">Precio: </span>${precio}`;
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
  h2.innerHTML = "";
  h4.innerHTML = "";
};


// for(let i = 0; i < pizzas.length; i++) {
//     if(i % 2 === 0) {
//         console.log (`estas pizzas tienen id: ${pizzas[i].id}`)
//     }
// }

// let ValorPizzas = pizzas.filter(pizza => pizza.precio > 600 ?
//      console.log(`La pizza ${pizza.nombre} esta mas de $600`): 
//      console.log(`La pizza ${pizza.nombre} cuesta menos de $600`))
// console.log(ValorPizzas) 

// let nombreYprecio = pizzas.map(pizza => console.log(`La pizza ${pizza.nombre} tiene el precio de $${pizza.precio}`))

// let nombreYingredientes = pizzas.map(function (objeto) {
//     let ingredientes = objeto.ingredientes
//     console.log(`La pizza ${objeto.nombre} tiene los ingredientes: ${ingredientes}`)

// }) 