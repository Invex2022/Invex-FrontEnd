import { useState } from 'react'

const useAuth = () => {
    const [user, setUser] = useState({})

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name] : event.target.value
        })
    }

    const login = () => {
        const {email, password} = user
        console.log(`this person, ${email} is trying to log in with ${password}`)
    }

    const signup = () => {
        console.log('signing up....')
        login()
    }
    
    return {
        handleChange,
        login,
        signup
    }
}

export default useAuth;

