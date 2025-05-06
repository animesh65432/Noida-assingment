import React from 'react'
import { useCallUserswithStories } from "../../hooks"
import User from './User'
import Styles from "./Users.module.css"
const Users: React.FC = () => {
    const { storiesWithUsers } = useCallUserswithStories()
    return (
        <div className={Styles.UsersConatainer}>
            {storiesWithUsers.map((user, index) => <User key={index} userwithstories={user} />)}
        </div>
    )
}

export default Users