import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout';

const routes = createBrowserRouter([
    {
        element: <Layout />,
        path: '/',
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>
);
