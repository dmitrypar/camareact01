import React, {useEffect, useState} from 'react';
//import classes from './ProfileStatus.module.css';


const ProfileStatus =(props)=> {

/*    state = {
        editMode: false,
        profileStatus: this.props.statusMessage,
        userId: this.props.userId
    };*/

let [editMode, editModeSwitch] = useState(false);
    let [profileStatus, editProfileStatus] = useState(props.statusMessage);

useEffect (
     ()=>{editProfileStatus(props.statusMessage)}, [props.statusMessage]
);

   const switchModeUp = () => {

        editModeSwitch (true)
    };



    const switchModeDown = () => {
// если входным параметром вписать только pros - будет ошибка "TypeError: props.updateStatusCreator is not a function"
        editModeSwitch (false);
        props.updateStatusCreator(props.userId,profileStatus)
    };

    const onChangeStatus = (e)=> {
        editProfileStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode
                ?
                <div>
                    {
                        (props.statusMessage==='')? <span onClick={switchModeUp}>***</span> : <span onClick={switchModeUp}>{props.statusMessage}</span>
                    }
                </div>
                :
                <div>
                    <input  onChange={onChangeStatus} autoFocus={true} onBlur={switchModeDown} value={profileStatus}/>
                </div>
            }
        </div>
    )
    };



        //console.log("render")

      /*  const SpanStatus = () => {
            return (
                <div>
                    {
                        (props.statusMessage==='')? <span onClick={props.switchModeUp}>***</span> : <span onClick={props.switchModeUp}>{props.statusMessage}</span>
                    }
                </div>
            )
        };

        const InputStatus = () => {
            return (
                <div>
                    <input onChange={onChangeStatus} autoFocus={true} onBlur={switchModeDown} value={profileStatus}/>
                </div>
            )
        };*/








export default ProfileStatus;