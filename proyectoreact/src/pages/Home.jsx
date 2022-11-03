import { UserLayout } from "../components/UserLayout"
import ItemListContainer from "../components/ItemListContainer"
import Producto from "../components/Producto"

export const Home = () => {
    return<UserLayout>
    <ItemListContainer/>
    <Producto/>
    </UserLayout>
}