import React from 'react';
import classes from './Profileinfo.module.css';


const Profileinfo=(props)=> {

if (!props.profile) {
  return  <div></div>
}
    const imgRis = props.profile.map((i)=>{return (i.picture.large)})
    const dataName = props.profile.map((i)=>{return (i.name)}).reduce((item, index, array)=>item)
    console.log(  props.profile.map((i)=>{return (i.picture.large)}))
    console.log(  props.profile.map((i)=>{return (i.picture)}))
    console.log(  props.profile.map((i)=>{return (i.name)}))
    console.log(  props.profile.map((i)=>{return (i.name.first)}))
    console.log(  props.profile.map((i)=>{return (dataName)}))

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
                <span>{dataName.first}   </span><span>   {dataName.last}</span>
            </div>

        </div>
    )
};

    export default Profileinfo;