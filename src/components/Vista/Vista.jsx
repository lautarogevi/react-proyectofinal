import './Vista.css'
import { useState } from 'react'

const Vista = () => {
    const [modoOscuro, setModoOscuro] = useState(false);

    const cambiarModo = () => {
        setModoOscuro(!modoOscuro);
    }

    const estilo = modoOscuro ? "oscuro" : "claro"

    return (
        <div className={estilo}>
            <button onClick={cambiarModo}> {modoOscuro ? "Claro" : "Oscuro"} </button>
            <h2>Componente Vista</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ad unde libero repellat, repudiandae sapiente officia incidunt ea minima veritatis eveniet, necessitatibus doloremque omnis odit aut enim eaque id possimus.</p>
        </div>
    )
}

export default Vista