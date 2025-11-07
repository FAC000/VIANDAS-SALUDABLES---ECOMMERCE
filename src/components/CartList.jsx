import { useCarritoContext } from "../context/CartContext";
import { IconCart } from "./IconCart";
import { Modal } from "./Modal";
import { useState } from "react";

export function CartList() {
    const { carrito, cantidadCarrito, precioTotal } = useCarritoContext();
    const [modalAbierto, setModalAbierto] = useState(false);

    const handleFinalizarCompra = () => {
        if (carrito.length > 0) {
            setModalAbierto(true); 
        }
    };
    return (
        <div className="carritoContainer">
            {carrito.length === 0 ? (
                <p className="emptyCartMessage">Tu carrito está vacío 🛒</p>
            ) : (
                <>
                    <div className="carritoLeft">
                        {carrito.map((prod) => (
                            <div key={prod.id} className="carritoItem">
                                <img
                                    src={`../img/${prod.imagen}`}
                                    alt={prod.nombre}
                                    className="carritoItemImage"
                                />
                                <div className="carritoItemDetails">
                                    <h3 className="carritoItemName">{prod.nombre}</h3>
                                    <p className="carritoItemQuantity">Cantidad: {prod.quantity}</p>
                                    <p className="carritoItemPrice">Precio unitario: ${prod.precio}</p>
                                    <p className="carritoItemSubtotal">
                                        Subtotal: ${prod.precio * prod.quantity}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="carritoRight">
                        <h2 className="resumenTitle">Resumen del carrito</h2>
                        <p className="resumenCantidad">
                            Productos totales: {cantidadCarrito()}
                        </p>
                        <p className="resumenPrecio">
                            Precio total: $
                            {precioTotal()}
                        </p>
                        <button className="finalizarCompraBtn" onClick={handleFinalizarCompra}>Finalizar Compra</button>
                    </div>
                </>
            )}

            <Modal
                isOpen={modalAbierto}
                onClose={() => setModalAbierto(false)}
            />
        </div>



    );
}
