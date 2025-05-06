import React, { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { StoryGroup } from '../../types';
import Story from './Story';
import styles from './Stories.module.css';

type Props = {
    storieswithusers: StoryGroup | null;
    setisStoriesCLicked: Dispatch<SetStateAction<boolean>>;
};

const Stories: React.FC<Props> = ({ storieswithusers, setisStoriesCLicked }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);

    const stories = storieswithusers?.stories ?? [];

    useEffect(() => {
        if (!stories.length || isPaused) return;

        const timer = setTimeout(() => {
            if (currentIndex < stories.length - 1) {
                setCurrentIndex((prev) => prev + 1);
                setAnimationKey(prev => prev + 1);
            } else {
                setisStoriesCLicked(false);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentIndex, stories.length, setisStoriesCLicked, isPaused, animationKey]);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
            setAnimationKey(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < stories.length - 1) {
            setCurrentIndex((prev) => prev + 1);
            setAnimationKey(prev => prev + 1);
        } else {
            setisStoriesCLicked(false);
        }
    };

    const handleTouchStart = () => setIsPaused(true);
    const handleTouchEnd = () => setIsPaused(false);

    if (!storieswithusers) return null;

    return (
        <div
            className={styles.overlay}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseUp={handleTouchEnd}
        >
            <button
                className={styles.closeButton}
                onClick={() => setisStoriesCLicked(false)}
            >
                ×
            </button>

            <div className={styles.progressBarContainer}>
                {stories.map((_, index) => (
                    <div key={index} className={styles.bar}>
                        <div
                            key={currentIndex === index ? animationKey : undefined}
                            className={`${styles.fill} ${currentIndex === index ? styles.animateProgress : ''}`}
                            style={{
                                width: currentIndex > index ? '100%' : '0%',
                                animationPlayState: isPaused ? 'paused' : 'running',
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className={styles.userHeader}>
                <div className={styles.avatarWrapper}>
                    <img
                        src={storieswithusers.user.avatar}
                        alt="avatar"
                        className={styles.avatar}
                    />
                </div>
                <span className={styles.username}>{storieswithusers.user.username}</span>
                <span className={styles.timestamp}>• {Math.floor(Math.random() * 12) + 1}h</span>
            </div>

            <div className={styles.storyFrame}>
                <Story story={stories[currentIndex]} />
            </div>

            <div className={styles.navigationContainer}>
                <div className={styles.leftClickZone} onClick={handlePrev}></div>
                <div className={styles.rightClickZone} onClick={handleNext}></div>
            </div>
        </div>
    );
};

export default Stories;