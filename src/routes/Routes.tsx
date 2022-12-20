import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

export interface IApplicationProps { }

const Router: React.FunctionComponent<IApplicationProps> = (props) => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>

    </BrowserRouter>
};

export default Router;