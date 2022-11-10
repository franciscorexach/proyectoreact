import { Route, Routes } from 'react-router-dom';
import { Botines, Camisetas, Pantalones, Pelotas } from './index';

export const CategoriesRouter = () => {

    return (
        <Routes>
            <Route path={"/camisetas"} element={<Camisetas />} />
            <Route path={"/pantalones"} element={<Pantalones />} />
            <Route path={"/botines"} element={<Botines />} />
            <Route path={"/pelotas"} element={<Pelotas />} />
        </Routes>
    )
}