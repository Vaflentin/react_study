import React from "react"
import p from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={p.profile}>
            <img className={p.img} src='https://phonoteka.org/uploads/posts/2022-01/1643302064_4-phonoteka-org-p-fon-plyazh-pesok-5.jpg' />
            <div className={p.profileContent}>
                ava + description
            </div>
        </div>  
    )}

export default ProfileInfo