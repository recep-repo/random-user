import React from 'react'
import User from '../components/User'
import { useUserContext } from '../context/UserContextProvider'

const Home = () => {
    const {users} = useUserContext()
    return (
        <div>
            <User user={users}/>
        </div>
    )
}

export default Home
