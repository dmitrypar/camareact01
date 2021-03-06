import React from 'react';
import classes from './Profileinfo.module.css';
import ProfileStatusHook from "./ProfileStatusHook";
import avaPhoto from './../../../assets/images/ava.jpg'


const Profileinfo=(props)=> {

if (props.profile === null) {
  return  <div> no data </div>
}
    const imgRis = props.profile.picture.large
    const dataName = props.profile.name.first
    //console.log(  props.profile)
    const userIdInt = Number.parseInt(props.userId);

    const photoUploader = (e) => {
        if (e.target.files.length)
        {props.updatePhotoCreator(e.target.files[0])}
    };

const isUserIdOwner= () =>{
        if (userIdInt===props.authIdProfile) {
            return <input type={'file'} onChange={photoUploader}/>
        }
    };


/*reduce((item, index, array)=>item вывел item из массива
    const imgRis = props.profile.map((i)=>{return (i.picture.large)}).reduce((item, index, array)=>item)*/

    //console.log(props)
    return (
    
        <div className={classes.content}>
           <p>
               <img src={imgRis|| avaPhoto} alt=""/>
               {isUserIdOwner()}
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