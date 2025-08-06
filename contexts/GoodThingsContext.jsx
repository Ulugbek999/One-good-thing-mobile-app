import { createContext, useEffect, useState } from 'react';
import { databases } from '../lib/appwrite';
import { ID, Permission, Query, Role } from 'react-native-appwrite';
import { useUser } from '../hooks/useUser';


export const GoodThingsContext = createContext();

const DATABASE_ID = "6890e83e0013423e831d";
const COLLECTION_ID = "6890e8560017a5ba2f83";


//a custom provider function to manage all of the states

export function GoodThingsProvider({children}){

    const [ things, setThings ] = useState([])
    const { user } = useUser()

    async function fetchThings(){
        try{
            const response = await databases.listDocuments(
                DATABASE_ID, COLLECTION_ID,
                [
                    //query to fetch
                    Query.equal('user_id', user.$id)
                ]
            )
            setThings(response.documents)
            console.log(response.documents)
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

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const localDateString = `${yyyy}-${mm}-${dd}`;


    async function createThing(data){
        try{

            const newThing = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, user_id: user.$id, date_logged: localDateString },
                

                //an array of document permissions
                [
                    Permission.read(Role.user(user.$id)), // only the current user is allowed to read
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                
                ]
            )

            setThings(prev => [newThing, ...prev]);


        }catch(error){
            console.log(error.message)
        }
    }

    async function deleteThing(id){
        try{
            await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
            setThings(prev => prev.filter(thing => thing.$id !== id));

        }catch(error){
            console.log(error.message)
        }
    }

    useEffect(() => {

        if(user){
            fetchThings()
        }else{
            setThings([])
        }

    }, [user])

    return (
        <GoodThingsContext.Provider
            value={{things, fetchThings, fetchThingById, createThing, deleteThing}}
        >
            {children} 
        </GoodThingsContext.Provider>
    )

}