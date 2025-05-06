import { useEffect, useState } from "react"
import type { StoryGroup } from "../types"
const useCallUserswithStories = () => {
    const [storiesWithUsers, setstoriesWithUsers] = useState<StoryGroup[]>([])
    const [loading, setloading] = useState<boolean>(false)


    const fecthusers = async () => {
        setloading(true)
        try {
            const response = await fetch("/data.json");
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }
            const data = await response.json();
            setstoriesWithUsers(data);
        } catch (error) {
            setstoriesWithUsers([])
        }
        finally {
            setloading(false)
        }
    }

    useEffect(() => {
        fecthusers()
    }, [])

    return { loading, storiesWithUsers }
}

export default useCallUserswithStories