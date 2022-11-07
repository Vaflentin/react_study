import React from "react";
import prof from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return <div className={prof.posts}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add</button>
            </div>

        </div>
        <div className={prof.postsItems}>
            <Post number='1' message='Hi' likesCount='15' />
            <Post number='2' message="Hello World" likesCount='20' />
        </div>

    </div>
}

export default MyPosts