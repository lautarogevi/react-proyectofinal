import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit exercitationem nemo, in, sed debitis voluptate eos voluptatum alias fuga quasi incidunt enim quam unde ad minima esse saepe molestias sint.</p>
            <img src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail