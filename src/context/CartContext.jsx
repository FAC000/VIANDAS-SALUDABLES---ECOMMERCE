import { createContext, useContext, useState, useEffect } from "react";

export const CreateContent = createContext();

export const useCarritoContext = () => useContext(CreateContent);

export const ContentProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [productos, setProductos] = useState([]);


    useEffect(() => {
        fetch("/data/productos.json")
            .then((res) => res.json())
            .then((data) => setProductos(data))
            .catch((error) => console.error("Error cargando productos:", error));
    }, []);



    const agregarCarrito = (producto, cantidad) => {
        console.log("🛒 Producto agregado:", producto)
        console.log("📦 Cantidad:", cantidad)

        setCarrito((prevCarrito) => {
            const enCarrito = prevCarrito.find((item) => item.id === producto.id);

            if (enCarrito) {
                return prevCarrito.map((item) =>
                    item.id === producto.id
                        ? { ...item, quantity: item.quantity + cantidad }
                        : item
                );
            } else {
                return [...prevCarrito, { ...producto, quantity: cantidad }];
            }
        });
    };



    const vaciarElemento = (id) => {
        setCarrito((prev) => prev.filter((prod) => prod.id !== id));
    };


    const vaciarCarrito = () => {
        setCarrito([]);
    };


    const cantidadCarrito = () => {
        return carrito.reduce((acum, prod) => acum + prod.quantity, 0);
    };

    const precioTotal = () => {
        return carrito.reduce((acum, prod) => acum + prod.quantity * prod.precio, 0);
    };

    return (
        <CreateContent.Provider
            value={{
                carrito,
                agregarCarrito,
                vaciarElemento,
                vaciarCarrito,
                cantidadCarrito,
                precioTotal,
            }}
        >
            {children}
        </CreateContent.Provider>
    );
};
