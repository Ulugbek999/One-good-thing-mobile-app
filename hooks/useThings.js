import { useContext } from 'react';
import { GoodThingsContext } from '../contexts/GoodThingsContext';


export function useThings() {
    const context = useContext(GoodThingsContext)

    if(!context){
        throw("useThings must be used within the GoodThingsProvider");
    }


    return context;
}