import { useCarritoContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export function Plantilla({ productos }) {

    const { agregarCarrito } = useCarritoContext()

    return (

        <div className="producto-card">
            <Link to={`/productos/${productos.id}`} className="productoLink">
                <img src={`./img/${productos.imagen}`} alt="" />
                <h3 className="producto-nombre">{productos.nombre}</h3>
                <p className="producto-descripcion">{productos.descripcion}</p>
                <p className="producto-precio">${productos.precio}</p>
            </Link>
            <button className="producto-btn" onClick={() => agregarCarrito(productos, 1)} >
                Añadir al carrito
            </button>
        </div >


    )
}
