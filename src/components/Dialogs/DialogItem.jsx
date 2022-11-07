import React from "react";
import diag from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    
    let path =  "/dialogs/" + props.id;

    return <div className={diag.dialog + ' ' + diag.active}>
        <NavLink to = {path}>{props.friendName}</NavLink>
    </div>
}

export default DialogItem;