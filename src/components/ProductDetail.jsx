import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PlantillaProductDetails } from "./PlantillaProductDetails"

export function ProductDetail() {
    const [item, setItem] = useState([])
    const { pid } = useParams()

    useEffect(() => {
        fetch('/data/productos.json')
            .then(response => response.json())
            .then(data => {
                setItem(data.find(prod => prod.id == pid))
            })
    }, [pid])

    return (
        <div className="detailsContainer">
            <PlantillaProductDetails prods={item} />
        </div>
    )
}
