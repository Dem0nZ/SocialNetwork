import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        if (!this.state.editMode){
            this.setState({
                editMode: true
            })
        } else {
            this.setState({
                editMode: false
            })
        }

    }

    handleKeyPress = (event) => {
        if (event.key ==='Enter') {
            this.activateEditMode();
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode } >{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={ this.activateEditMode } onKeyPress={this.handleKeyPress} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;