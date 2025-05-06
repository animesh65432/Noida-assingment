export interface User {
    id: string;
    username: string;
    avatar: string;
}

export interface Story {
    id: string;
    imageUrl: string;
    createdAt: string;
    user: User;
}

export interface StoryGroup {
    userId: string;
    user: User;
    stories: Story[];
    seen: boolean;
}