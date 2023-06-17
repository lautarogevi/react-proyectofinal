import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({ id, nombre, precio, stock, img }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

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
                agregarCantidad > 0 ? (<Link to={"/cart"}> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail