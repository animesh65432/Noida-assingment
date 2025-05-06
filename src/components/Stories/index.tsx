import React from 'react'
import { useCallUsers } from "../../hooks"
import Srorie from './Storie'

const Srories: React.FC = () => {
    const { loading, users } = useCallUsers()

    if (loading) {
        return <div></div>
    }
    return (
        <div>{
            users.map((user, index) => <Srorie user={user} key={index} />)}
        </div>
    )
}

export default Srories