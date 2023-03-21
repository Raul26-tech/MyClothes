import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Layout from '../components/Layout';

export const routes = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Layout />} />)
);
