import { Route, Routes } from 'react-router-dom';
import { Inicio } from './inicio/Index';
import { ProductoLista } from './productos/Index';

export const Paginas = () => {
    return(
        <section>
            <Routes>
                <Route path="/" exact element={<Inicio/>} />
                <Route path="/productos" exact element={<ProductoLista/>}/>
            </Routes>
        </section>
    );
}