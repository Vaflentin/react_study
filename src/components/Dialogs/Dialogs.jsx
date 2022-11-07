import React from "react";
import diag from './Dialogs.module.css'
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";

const Dialogs = () => {
    return (
        <div className={diag.dialogs}>
            <div className={diag.dialogsItems}>
               <DialogItem friendName = "Antonich" id = "1" />
               <DialogItem friendName = "Nikitich" id = "2" />
               <DialogItem friendName = "Andreyich" id = "3" />
               <DialogItem friendName = "Maximich" id = "4" />
            </div>
            <div className={diag.messages}>
                <MessageItem text = "Hi" />
                <MessageItem text = "Hello" />
                <MessageItem text = "Bonjour" />
            </div>
        </div>)
}

export default Dialogs;