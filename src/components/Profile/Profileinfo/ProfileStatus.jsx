import React from 'react';
//import classes from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        profileStatus: this.props.statusMessage,
        userId: this.props.userId
    };

    switchModeUp = () => {

        return this.setState({
            editMode: true
        })
    };



    switchModeDown = () => {

         this.setState({
            editMode: false
        });
             this.props.updateStatusCreator(this.state.userId, this.state.profileStatus);
        console.log('this.state', this.state);
    };

    onChangeStatus = (e)=> {
         this.setState({
            profileStatus: e.currentTarget.value

        },
        console.log('this.setState', e.currentTarget.value)
        )

    };


    componentDidUpdate(prevState, prevProps) {
        console.log("componentDidUpdate")
        if(prevProps.statusMessage !== this.props.profileStatus) {
            this.setState({
                profileStatus: this.props.statusMessage
            })
        }
        //debugger
    }

    render() {

        console.log("render")

        const SpanStatus = () => {
            return (
                <div>
                    <span onClick={this.switchModeUp}>{this.props.statusMessage}</span>
                </div>
            )
        };

        const InputStatus = () => {
            return (
                <div>
                    <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.switchModeDown} value={this.state.profileStatus}/>
                </div>
            )
        };

        return (
            <div>
                {!this.state.editMode ? <SpanStatus/> : <InputStatus/>}
            </div>
        )
    }

};



export default ProfileStatus;