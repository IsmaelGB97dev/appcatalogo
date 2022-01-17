import { Route, Routes } from 'react-router-dom';
import { Inicio } from './inicio/Index';
import { ProductoLista } from './productos/Index';
import { ProductoDetalle } from './productos/ProductoDetalle';

export const Paginas = () => {
    return(
        <section>
            <Routes>
                <Route path="/" exact element={<Inicio/>} />
                <Route path="/productos" exact element={<ProductoLista/>} />
                <Route path="/productos/:id" exact element={<ProductoDetalle/>} />
            </Routes>
        </section>
    );
}