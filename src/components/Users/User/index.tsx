import React, { useState } from 'react'
import type { StoryGroup } from "../../../types"
import styles from "./User.module.css"

import Srories from '../../Stories'

type UserProps = {
    userwithstories: StoryGroup
}

const User: React.FC<UserProps> = ({ userwithstories }) => {
    const [Userswithstories, setUserswithstories] = useState<StoryGroup | null>(null)
    const [isStoriesCLicked, setisStoriesCLicked] = useState<boolean>(false)

    const OnClickSetStories = (userwithstories: StoryGroup) => {
        setUserswithstories(userwithstories)
        setisStoriesCLicked(true)
    }

    return (
        <>
            <div className={styles.userContainer} onClick={() => OnClickSetStories(userwithstories)}>
                <img src={userwithstories.user.avatar} />
                <p>{userwithstories.user.username}</p>
            </div>
            {
                isStoriesCLicked && <Srories storieswithusers={Userswithstories} setisStoriesCLicked={setisStoriesCLicked} />
            }
        </>
    )
}

export default User