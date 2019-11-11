import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    MaxPes
                </div>
                <div className={classes.dialog}>
                    Pavelexus
                </div>
                <div className={classes.dialog}>
                    Kalem
                </div>
                <div className={classes.dialog}>
                    Sanek
                </div>
                <div className={classes.dialog}>
                    Luxur
                </div>
                <div className={classes.dialog}>
                    BatulinS
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hi!
                </div>
                <div className={classes.message}>
                    How Are you?
                </div>
                <div className={classes.message}>
                    DHDHDHD!!!
                </div>
            </div>
        </div>
    )
}

export default Dialogs;