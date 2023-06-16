import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {

    const {cantidadTotal} = useContext(CarritoContext);
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"

    return (
        <div>
            <Link to='/cart'>
                <img className='imgCarrito' src= {imgCarrito} height="35" width="35" alt="Carrito de compras"/>
            {
                cantidadTotal > 0 && <span> {cantidadTotal} </span>
            }
            </Link>
        </div>
    )
}

export default CartWidget