import React, { useEffect, useState } from 'react';
import type { StoryType } from '../../../types';
import styles from './Story.module.css';

type Props = {
    story: StoryType;
};

const Story: React.FC<Props> = ({ story }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 50);
        return () => {
            setIsVisible(false);
            clearTimeout(timer);
        };
    }, [story.imageUrl]);

    return (
        <div className={styles.storyWrapper}>
            <div className={styles.imageContainer}>
                <img
                    src={story.imageUrl}
                    alt="story"
                    className={`${styles.image} ${isVisible ? styles.visible : ''}`}
                />
            </div>
        </div>
    );
};

export default Story;
