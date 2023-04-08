import { Routes as RoutesApp, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Products from '../pages/Products';

export default function Routes() {
    return (
        <RoutesApp>
            <Route path="/login" />
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<Products />} />
        </RoutesApp>
    );
}
