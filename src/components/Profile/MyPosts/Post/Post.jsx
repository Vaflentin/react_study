import React from "react";
import prof from './Post.module.css'

const Post = (props) => {
    return <div className={prof.container}>
        <div className={prof.item}>
            <div>
                <span>Post {props.number} </span>
            </div>
            <img className={prof.img} src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" />
            <span>{props.message}</span>
            <div>

                <div>
                    Likes {props.likesCount}
                </div>
            </div>
        </div>
    </div>
}

export default Post