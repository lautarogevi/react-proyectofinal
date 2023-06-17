import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'
import imgLogo from '../../img/vag-logo-nuevo.png'

const NavBar = () => {

    return (
    <header>
        <Link to={"/"}> 
            <img className='logoHeader' height={80} width={350} src={imgLogo} alt="VAG Imports"/> 
        </Link>
        
        <nav>
            <ul className='navBar'>
                <li>
                    <NavLink to={"/"} > HOME </NavLink>
                </li>
                <li>
                    <NavLink to={"/categoria/2"} > PERFORMANCE </NavLink>
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