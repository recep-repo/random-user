import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

export const userContext = createContext()

export const useUserContext = () => {
    return useContext(userContext)
}

const UserContextProvider = ({children}) => {
    const [users, setusers] = useState([])

    const url = "https://api.github.com/users"
    
    const getData = async () => {
            await axios(url)
            .then((res) => setusers(res.data[[Math.floor(Math.random()*29)]]
            ))
        }
        

    useEffect(() => {
        getData()
    }, [])

    console.log(users)
    const values = {
        users,
        getData
    }
    
    return(
        <userContext.Provider value={values}>
            {children}
        </userContext.Provider>
    )    
}

export default UserContextProvider