import { CartList } from "./CartList"
import { Plantilla } from "./Plantilla"


export function ItemMap({ viandas }) {

    return (
        <>
            {
                
                    
                    viandas.map(prod => <Plantilla key={prod.id} productos={prod} />)
                   

            }

        </>
    )
}
