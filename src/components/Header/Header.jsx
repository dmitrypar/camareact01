import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";



const Header=(props)=> {
    //console.log(props)
    //console.log(props.token)
    //console.log(props.token)
    //const tokenT = props.token.map((t)=> {return t.access_token})
    //console.log(props.token.acces_token)
    return (
        < header
    className = {classes.header} >
        < img src = "https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" alt={'gg'}/>
            <div className={classes.loginBlock}>


                <br/>

                <div>
                    {props.auth ? <div>привет {props.email}<button onClick={props.toLogOutCreator}>Logout</button></div> : <NavLink to={'/login'}>Login </NavLink>}
                </div>
            </div>

        </header>

)
};

export default Header;