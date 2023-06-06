const productos = [
    {nombre: "Cachas", precio: 500, id: "1", img: "../img/cachas-carbono.jpg", idCat:"2" },
    {nombre: "Exhaust", precio: 180, id: "2", img: "../img/exhaust.jpeg", idCat:"2" },
    {nombre: "Spoiler", precio: 200, id: "3", img: "../img/spoiler-techart.jpeg", idCat:"3" },
    {nombre: "Volante", precio: 420, id: "4", img: "../img/volantemb.jpg", idCat:"3" },
]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos)
        }, 100)
    })
}

// Funcion para que nos retorne un solo producto.
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100);
    })
}


//Creamos una nueva funcion que retorna toda la categoria:

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(prod => prod.idCat ===idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}