import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'
import imgLogo from '../../assets/img/vag-logo-nuevo.png'

const NavBar = () => {

    return (
    <header>
        <Link to={"/"}> 
            <img className='logoHeader' src={imgLogo} alt="VAG Imports"/> 
        </Link>
        
        <nav>
            <ul className='navBar'>
                <li>
                    <NavLink to={"/"} > HOME </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/2"} > SERVICIOS </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/3"} > ACCESORIOS </NavLink>
                </li>
                <li> 
                    <NavLink to={"/categoria/4"} > VAG LIVE </NavLink>
                </li>
                <li> 
                    <NavLink to={"/categoria/5"} > CONTACTO </NavLink> 
                </li>
            </ul>
        </nav>

        <CartWidget/>
    
    </header>
    )
}

export default NavBar

/**
 * <ul>
                        <li> Potenciación </li>
                        <li> Cambio de aceite y filtros </li>
                        <li> Service de caja </li>
                        <li> Tratamientos cerámico y acrílico </li>
                    </ul>
 
 <ul>
                        <li> Exhaust Sistem </li>
                        <li> Aerodinamic and Styling </li>
                    </ul>
 
 
 
 
                    */