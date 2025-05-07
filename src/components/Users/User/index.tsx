import React from 'react'
import type { StoryGroup } from "../../../types"
import styles from "./User.module.css"

type UserProps = {
    userwithstories: StoryGroup
}

const User: React.FC<UserProps> = ({ userwithstories }) => {
    return (
        <>
            <div className={styles.userContainer} id='userContainer' >
                <img src={userwithstories.user.avatar} />
                <p>{userwithstories.user.username}</p>
            </div>
        </>
    )
}

export default User