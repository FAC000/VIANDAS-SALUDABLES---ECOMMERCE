import { useCarritoContext } from "../context/CartContext";
import { UseCounter } from "../hooks/UseCounter";
import { ItemCounter } from "./ItemCounter";



export function PlantillaProductDetails({ prods }) {
    const { agregarCarrito } = useCarritoContext()
    const { count, incrementar, decrementar, } = UseCounter(1)

  


    return (
        <div className="productDetailContainer">
            <div className="productCard">
                <img
                    src={`../img/${prods.imagen}`}
                    alt={prods.nombre}
                    className="productImage"
                />
                <div className="productInfo">
                    <h2 className="productTitle">{prods.nombre}</h2>
                    <p className="productDescription">{prods.descripcion}</p>
                    <p className="productPrice">${prods.precio}</p>

                    <div className="contadorContainer">
                        <button className="btnControl" onClick={decrementar}>-</button>
                        <span className="contador">{count}</span>
                        <button className="btnControl" onClick={incrementar}>+</button>
                    </div>

                    <button className="btnAgregar" onClick={()=>{agregarCarrito(prods, count)}} >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>

    );
};