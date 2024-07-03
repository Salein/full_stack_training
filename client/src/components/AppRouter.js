import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
    const isAuth = false
    const url = useLocation()
    const path = url.pathname
    return (
        
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>} exact />)}
            {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>} exact />)}
        </Routes>
    );
};

export default AppRouter;