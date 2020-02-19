import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/usersContainers";






const App = (props) => {


  debugger;

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render= {() =>
                        <DialogsContainer
                            /*dialogsData={props.state.dialogsPage.dialogsData}
                                 messagesData={props.state.dialogsPage.messagesData}
                                 newMessageBody = {props.state.dialogsPage.newMessageBody}
                                 dispatch={props.dispatch}*/
                        />}/>
                    <Route path='/profile' render={() =>
                        <Profile 
                       /* profilePage={props.state.profilePage}
                        dispatch={props.dispatch}*/ />}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/users' render={()=> <UsersContainer/>}/>
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