import { useContext } from 'react';
import { GoodThingsContext } from '../contexts/GoodThingsContext';


export function useThings() {
    const context = useContext(GoodThingsContext)

    if(!context){
        throw("useUser must be used within the GoodThingsProvider");
    }


    return context;
}