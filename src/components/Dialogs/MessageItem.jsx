import React from "react";
import diag from './Dialogs.module.css'
import DialogItem from "./DialogItem";

const MessageItem = (props) =>{
    return  <div className={diag.message}>{props.text}</div>
}

export default MessageItem