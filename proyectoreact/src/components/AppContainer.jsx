import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import Producto from "./Producto";

const AppContainer = () => {
    const [producto, setProductos] = useState([]);

    useEffect(() => {
        getProducts()
        .then((items) => setProductos(items))
        .catch((e) => console.log(e));
    }, []);

    return(
        <div className="products">
            {productos.map((producto) => {
                return 
                <Item 
                key={producto.id}
                nombre={producto.nombre} 
                categoria={producto.categoria}
                precio={producto.precio}
                />
            }

            )}
        </div>
    )
    
    /*<Producto 
    nombre="Botines Addidas"
    categoria="Fútbol"
    precio={20000}
    imagen=""
    />*/
}

export default AppContainer