import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/usersContainers";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {Loader} from "./components/Commons/Loader/Loader";
import {toInitApp} from "./redux/app-reducer";






class  App   extends React.Component {


    componentDidMount(formData) {

        toInitApp()

    }

    render () {

        if (this.props.initApp){
            return (
                <BrowserRouter>
                    <div className='app-wrapper'>
                        <HeaderContainer/>
                        <Navbar/>

                        <div className='app-wrapper-content'>
                            <Route path='/dialogs' render= {() =>
                                <DialogsContainer
                                    /*dialogsData={props.state.dialogsPage.dialogsData}
                                         messagesData={props.state.dialogsPage.messagesData}
                                         newMessageBody = {props.state.dialogsPage.newMessageBody}
                                         dispatch={props.dispatch}*/
                                />}/>
                            <Route path='/profile/users/:userId'  /* анализирует УРЛ на совпадение - например  /profile/users/ и в userId записывает все что указано после /profile/users/:*/
                                   render={() => <ProfileContainer/>}/>
                            <Route path='/profile/' exact render={() => <ProfileContainer/>}/>
                            <Route path='/music' render={Music}/>
                            <Route path='/users' exact render={()=> <UsersContainer/>}/>
                            <Route path='/settings' render={Settings}/>
                            <Route path='/login' render={()=> <Login/>}/>
                            {/*<Dialogs/>*/}
                            {/*<Profile/>*/}
                        </div>

                    </div>
                </BrowserRouter>
            );
        } else {
            return (
                <Loader/>
                )

        }

    }
};


const mapStatetoProps = (state) => ({
    auth: state.auth.isAuth,
    initApp: state.appInit.initApp
});



export default compose(
    connect(mapStatetoProps, {toInitApp}),
    // withAuthRedirectHoc
)(App)

