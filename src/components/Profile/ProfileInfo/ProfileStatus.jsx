import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        if (!this.state.editMode){
            this.setState({
                editMode: true
            })
        } else {
            this.setState({
                editMode: false
            });
            this.props.updateStatus(this.state.status);
        }

    }

    handleKeyPress = (event) => {
        if (event.key ==='Enter') {
            this.activateEditMode();
        }
    }

    onStatusChange = (e) => {
        this.setState( {
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode } >{this.props.status || 'status not defined'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.activateEditMode } onKeyPress={this.handleKeyPress} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;