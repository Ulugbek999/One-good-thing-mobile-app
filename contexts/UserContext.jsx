import { createContext, useEffect, useState } from 'react';
import { account, avatars } from '../lib/appwrite';
import { Account, ID } from "react-native-appwrite";

export const UserContext = createContext()

export function UserProvider({children}) {
    const [user, setUser] = useState(null)
    const [authChecked, setAuthChecked] = useState(false);

    async function login(email, password){

        try {
            //seding a request to the appwrite to make a new user account
            await account.createEmailPasswordSession(email, password);
            const response = await account.get(); //reaching out to the server and grabbing the user object
            setUser(response);
        }catch (error)
        {   
            throw Error(error.message);
            //showing the errors on the UI

        }        

    }

    async function register(email, password){
        
        try {
            //seding a request to the appwrite to make a new user account
            await account.create(ID.unique(), email, password);
            await login(email, password);
        }catch (error)
        {   
            throw Error(error.message);
        }

    }

    async function logout(){
        await account.deleteSession("current");
        setUser(null);
    }    
    
    async function getInitialUserValue() {
        try {
            const response = await account.get();
            setUser(response);
        } catch(error){
            setUser(null);
        } finally {
            setAuthChecked(true);
        }
    }

    useEffect(() => {
        getInitialUserValue();
    }, [])

    
    return(
        <UserContext.Provider value={{ user, login, register, logout, authChecked }}>
            {children}
        </UserContext.Provider>
    )

}