import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';

const routes = createBrowserRouter([
    {
        element: <Layout children={undefined} />,
        path: '/',
    },
    { element: <Main />, path: '/products' },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>
);
