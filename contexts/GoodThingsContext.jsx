import { createContext, useState } from 'react';

export const GoodThingsContext = createContext();

const DATABASE_ID = "6890e8560017a5ba2f83";
const COLLECTION_ID = "6890e8560017a5ba2f83";


//a custom provider function to manage all of the states

export function BooksProvider({children}){

    const [ things, setThings ] = useState([])

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