import React from 'react'
import Producto from '../Producto/Producto'

// Las "props" son objetos que los componentes padres le pasan a sus hijos con informacion importante para ser renderizada
// Se pasan como parametros en una funcion.
// Esto favorece a la reutilizacion de componentes 

const ContenedorProductos = () => {
    const props = {
        nombre: "Pan",
        precio: 500,
    }
    return (
        <div>
            <Producto nombre="Arroz" precio={100} />
            <Producto nombre="Fideos" precio={180} />
            <Producto {...props}/>
        </div>
    )
}

export default ContenedorProductos