import { useCarritoContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export function Plantilla({ productos }) {

    const { agregarCarrito } = useCarritoContext()

    return (
        <div className="productoCard">
  <div className="productoCardLeft">
    <Link to={`/productos/${productos.id}`} className="productoLink">
      <img
        src={`./img/${productos.imagen}`}
        alt={productos.nombre}
      />
    </Link>
  </div>

  <div className="productoCardRight">
    <Link to={`/productos/${productos.id}`} className="productoLink">
      <div>
        <h3 className="productoNombre">{productos.nombre}</h3>
        <p className="productoDescripcion">{productos.descripcion}</p>
        <p className="productoPrecio">${productos.precio}</p>
      </div>
    </Link>

    <button
      className="productoBtn"
      onClick={() => {
        agregarCarrito(productos, 1);
      }}
    >
      Añadir al carrito
    </button>
  </div>
</div>


    )
}
