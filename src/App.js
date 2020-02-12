import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";




const App = (props) => {


  debugger;

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render= {() =>
                        <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                 messagesData={props.state.dialogsPage.messagesData}
                                     addNewMessageText={props.addNewMessageText}
                                 newMessageBody = {props.state.dialogsPage.newMessageBody}
                                 dispatch={props.dispatch}/>}/>
                    <Route path='/profile' render={() =>
                        <Profile 
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch} />}/>
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