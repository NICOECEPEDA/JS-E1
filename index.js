let pizzas = [
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

for(let i = 0; i < pizzas.length; i++) {
    if(i % 2 === 0) {
        console.log (`estas pizzas tienen id: ${pizzas[i].id}`)
    }
}

let ValorPizzas = pizzas.filter(pizza => pizza.precio > 600 ?
     console.log(`La pizza ${pizza.nombre} esta mas de $600`): 
     console.log(`La pizza ${pizza.nombre} cuesta menos de $600`))
console.log(ValorPizzas) 

let nombreYprecio = pizzas.map(pizza => console.log(`La pizza ${pizza.nombre} tiene el precio de $${pizza.precio}`))

let nombreYingredientes = pizzas.map(function (objeto) {
    let ingredientes = objeto.ingredientes
    console.log(`La pizza ${objeto.nombre} tiene los ingredientes: ${ingredientes}`)

}) 