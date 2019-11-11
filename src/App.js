import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";

    let postsData = [
{id: 1, message: 'Hihu drug', likesCount: 35},
{id: 2, message: 'Hlovoe soobshenie da', likesCount: 71}
]

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render= {() =><Dialogs />}/>
                    <Route path='/profile' render={() =><Profile postsData={postsData}/>}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                    {/*<Dialogs/>*/}
                    {/*<Profile/>*/}
                </div>

            </div>
        </BrowserRouter>

    );
};


export default App;

console.log ();