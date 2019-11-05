import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MyPosts from './components/Profile/My Posts/MyPosts';
import Profile from './components/Profile/Profile';


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <MyPosts/>
        </div>

    );
};


export default App;
