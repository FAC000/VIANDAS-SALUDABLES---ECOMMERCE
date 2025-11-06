
import { Link } from "react-router-dom"
import { useCarritoContext } from "../context/CartContext"



export function IconCart() {
    const { cantidadCarrito } = useCarritoContext()
    return (

        <div className="iconcartContainer">

            <Link className="productoLink" to={'/carrito'}>
                <i className="bi bi-cart"></i>
                <span>{cantidadCarrito()}</span>
            </Link >
        </div>
    )
}
