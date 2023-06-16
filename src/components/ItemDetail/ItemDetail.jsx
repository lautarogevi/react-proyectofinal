import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Importamos el CarritoContext:
import { CarritoContext } from '../../context/CarritoContext'
// Importamos el useContext:
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, stock, img }) => {

    // 1) Creamos un estado con la cantidad de productos agregados:
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    // useContext:
    const { agregarProducto } = useContext(CarritoContext);

    // 2) Creamos una funcion manejadora de la cantidad:
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        // console.log("Productos agregados:" + cantidad);

        // Ahora aca creo un objeto con el item y la cantidad:
        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }

    return (
        <div className='contenedorItem'>
            <h2> Nombre: {nombre} </h2>
            <h3> Precio: {precio} </h3>
            <h3> ID: {id} </h3>
            <h3> Unidades disponibles: {stock} </h3>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit exercitationem nemo, in, sed debitis voluptate eos voluptatum alias fuga quasi incidunt enim quam unde ad minima esse saepe molestias sint.</p>
            <img className='imgDetail' src={img} alt={nombre} />
            {
                // Aca empleamos la logica de montaje y desmontaje de componentes.
            }
            {
                agregarCantidad > 0 ? (<Link to={"/cart"}> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail