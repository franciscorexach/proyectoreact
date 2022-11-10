import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { CategoriesRouter } from '../pages/categories/CategoriesRouter';
import { Contacto } from '../pages/Contacto';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path={"/category/*"} element={<CategoriesRouter />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* <Route path="/" element={<Navigate to="/" />} /> */}
        </Routes>
    )
}