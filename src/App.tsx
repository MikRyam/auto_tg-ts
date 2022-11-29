import React, {FC} from 'react';
import 'antd/dist/reset.css';
import './App.css';
import Navigation from "./components/header/Navigation";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import ContactPage from "./pages/ContactPage";

const App: FC = () => {
    
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/result' element={<ResultPage/>}/>
                <Route path='/contacts' element={<ContactPage/>}/>
            </Routes>
        </>
    )    
};

export default App;
