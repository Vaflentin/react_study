import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Profile from './components/Profile/Profile.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <NavBar />

                <div className ='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs />} />;
                        <Route path='/' element={<Profile />} />;
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    )
}

export default App;
