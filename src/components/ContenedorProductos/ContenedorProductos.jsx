import React from 'react'
import Producto from '../Producto/Producto'

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