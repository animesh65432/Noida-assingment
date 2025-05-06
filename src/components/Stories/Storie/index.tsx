import React from 'react'
import type { UsersTypes } from "../../../types"

type Props = {
    user: UsersTypes
}

const Srorie: React.FC<Props> = ({ user }) => {
    return (
        <div>
            <img src={user.picture} />
        </div>
    )
}

export default Srorie