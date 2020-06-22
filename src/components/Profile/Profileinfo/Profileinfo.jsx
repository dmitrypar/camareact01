import React from 'react';
import classes from './Profileinfo.module.css';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHook from "./ProfileStatusHook";


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
            {/*<img src='http://www.radionetplus.ru/uploads/posts/
2013-04/1365401196_teplye-oboi-1.jpeg'/>*/}

           <p>
               <img src={imgRis} alt=""/>
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