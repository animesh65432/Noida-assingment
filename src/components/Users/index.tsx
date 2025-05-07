import React, { useState } from 'react'
import { useCallUserswithStories } from "../../hooks"
import User from './User'
import Styles from "./Users.module.css"
import Stories from '../Stories'
const Users: React.FC = () => {
    const [currentUserIndex, setCurrentUserIndex] = useState<number | null>(null);
    const [isStoriesClicked, setisStoriesClicked] = useState(false);
    const { storiesWithUsers } = useCallUserswithStories()

    const handleUserClick = (index: number) => {
        setCurrentUserIndex(index);
        setisStoriesClicked(true);
    };

    const goToNextUser = () => {
        if (currentUserIndex !== null && currentUserIndex < storiesWithUsers.length - 1) {
            setCurrentUserIndex(prev => (prev ?? 0) + 1);
        } else {
            setisStoriesClicked(false);
        }
    };

    const goToPreviousUser = () => {
        if (currentUserIndex !== null && currentUserIndex > 0) {
            setCurrentUserIndex(prev => (prev ?? 1) - 1);
        }
    };

    return (
        <>
            <div className={Styles.UsersConatainer}>
                {storiesWithUsers.map((user, index) => (
                    <div key={index} onClick={() => handleUserClick(index)}>
                        <User userwithstories={user} />
                    </div>
                ))}
            </div>
            {isStoriesClicked && currentUserIndex !== null && (
                <Stories
                    storieswithusers={storiesWithUsers[currentUserIndex]}
                    setisStoriesCLicked={setisStoriesClicked}
                    goToNextUser={goToNextUser}
                    goToPreviousUser={goToPreviousUser}
                    currentUserIndex={currentUserIndex}
                />
            )}
        </>
    )
}

export default Users