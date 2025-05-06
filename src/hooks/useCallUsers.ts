import { useEffect, useState } from "react"
import type { StoryGroup } from "../types"
const useCallUsers = () => {
    const [users, setUsers] = useState<StoryGroup[]>([])
    const [loading, setloading] = useState<boolean>(false)


    const fecthusers = async () => {
        setloading(true)
        try {
            const response = await fetch("/data.json");
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            setUsers([])
        }
        finally {
            setloading(false)
        }
    }

    useEffect(() => {
        fecthusers()
    }, [])

    return { loading, users }
}

export default useCallUsers