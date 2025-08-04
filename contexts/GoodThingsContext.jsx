import { createContext, useState } from 'react';
import { databases } from '../lib/appwrite';
import { ID, Permission, Role } from 'react-native-appwrite';
import { useUser } from '../hooks/useUser';


export const GoodThingsContext = createContext();

const DATABASE_ID = "6890e8560017a5ba2f83";
const COLLECTION_ID = "6890e8560017a5ba2f83";


//a custom provider function to manage all of the states

export function GoodThingsProvider({children}){

    const [ things, setThings ] = useState([])
    const { user } = useUser()

    async function fetchThings(){
        try{

        }catch(error){
            console.log(error.message);
        }
    }

    async function fetchThingById(id){
        try{

        }catch(error){
            console.log(error.message)
        }
    }

    async function createThing(data){
        try{

            const newThing = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, userId: user.$id },
                //an array of document permissions
                [
                    Permission.read(Role.user(user.$id)), // only the current user is allowed to read
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                
                ]
            )

        }catch(error){
            console.log(error.message)
        }
    }

    async function deleteThing(id){
        try{

        }catch(error){
            console.log(error.message)
        }
    }

    return (
        <GoodThingsContext.Provider
            value={{things, fetchThings, fetchThingById, createThing, deleteThing}}
        >
            {children} 
        </GoodThingsContext.Provider>
    )

}