import { useEffect, useState } from "react"
import { ItemMap } from "./ItemMap"


export function ProductsList() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('/data/productos.json')
            .then(response => response.json())
            .then(data => setProductos(data))
    }, [])


    return (
        <div className="productsContainer">
            <ItemMap viandas={productos} filtradoCart='Filtrado' />
        </div>
    )
}
