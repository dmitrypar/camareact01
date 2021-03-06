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
import {connect, Provider} from "react-redux";
import {Loader} from "./components/Commons/Loader/Loader";
import {toInitApp} from "./redux/app-reducer";
import store from "./redux/redux-store";
import withLazyLoader from "./hoc/withLazyloading";






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
                            <Route path='/dialogs' render= {withLazyLoader(() => <DialogsContainer/>)}/>
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

const SocialNet = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer  />
            </Provider>

        </BrowserRouter>
    )
}

const mapStatetoProps = (state) => ({
    auth: state.auth.isAuth,
    initApp: state.appInit.initApp
});


 const AppContainer = compose(
    connect(mapStatetoProps, {toInitApp}),
    // withAuthRedirectHoc
)(App)



export default SocialNet