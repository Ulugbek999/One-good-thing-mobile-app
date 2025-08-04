import { useRouter } from "expo-router"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"
import EnchantedText from "../EnchantedText"
import ThemedLoader from "../ThemedLoader"




const UserOnly = ({children}) => {

    const { user, authChecked } = useUser()
    const router = useRouter()

    //for everytime the values above change
    useEffect(() => {
        if (authChecked && user === null) {
            router.replace('/login') //to replace the current page with a new one (redirecting to the login page if the use is not logged in)
        }
    }, [user, authChecked])

    if(!authChecked || !user){
        return(
            <ThemedLoader/>

        )
    }

    return children;
}




export default UserOnly