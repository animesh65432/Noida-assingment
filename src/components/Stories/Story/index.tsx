import React from 'react';
import type { StoryType } from '../../../types';
import styles from './Story.module.css';

type Props = {
    story: StoryType;
};

const Story: React.FC<Props> = ({ story }) => {

    return (
        <div className={styles.storyWrapper}>
            <div className={styles.imageContainer}>
                <img
                    src={story.imageUrl}
                    alt="story"
                    className={styles.image}
                />


            </div>
        </div>
    )
};

export default Story;