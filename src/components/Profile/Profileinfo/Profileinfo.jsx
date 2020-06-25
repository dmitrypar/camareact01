import React from 'react';
import classes from './Profileinfo.module.css';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHook from "./ProfileStatusHook";
import avaPhoto from './../../../assets/images/ava.jpg'


const Profileinfo=(props)=> {

if (props.profile === null) {
  return  <div> no data </div>
}
    const imgRis = props.profile.picture.large
    const dataName = props.profile.name.first
    //console.log(  props.profile)


/*reduce((item, index, array)=>item вывел item из массива
    const imgRis = props.profile.map((i)=>{return (i.picture.large)}).reduce((item, index, array)=>item)*/


    return (
    
        <div className={classes.content}>
           <p>
               <img src={imgRis|| avaPhoto} alt=""/>
           </p>

                <ProfileStatusHook
                    updateStatusCreator={props.updateStatusCreator}
                    statusMessage={props.statusMessage}
                    userId={props.userId}/>


            <div className={classes.descriptionsBlock}>
                <span>{dataName}   </span>
            </div>

        </div>
    )
};

    export default Profileinfo;