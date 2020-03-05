import React from 'react';
import classes from './Profileinfo.module.css';


const Profileinfo=(props)=> {

if (!props.profile) {
  return  <div></div>
}
    const imgRis = props.profile.avatar
    const dataName = props.profile.first_name
    console.log(  props.profile)


/*reduce((item, index, array)=>item вывел item из массива
    const imgRis = props.profile.map((i)=>{return (i.picture.large)}).reduce((item, index, array)=>item)*/


    return (
    
        <div className={classes.content}>
            {/*<img src='http://www.radionetplus.ru/uploads/posts/
2013-04/1365401196_teplye-oboi-1.jpeg'/>*/}

           <p>
               <img src={imgRis} alt=""/>
           </p>

            <div className={classes.descriptionsBlock}>
                <span>{dataName}   </span>
            </div>

        </div>
    )
};

    export default Profileinfo;