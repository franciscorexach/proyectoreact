import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"

const Navbar = ({header}) => {
    return <header>
        <h1>Futbolópolis</h1>
        <ul>
            <li>Inicio</li>
            <Link to={"category/camisetas"}
>Camisetas</Link>
<Link to={"category/camisetas"}
>Pantalones</Link><Link to={"category/pantalones"}
>Botines</Link><Link to={"category/botines"}
>Pelotas</Link><Link to={"category/pelotas"}
>Contacto</Link>
        </ul>
        <CartWidget/>
    </header>
    
}

export default Navbar