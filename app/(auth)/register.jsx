import { StyleSheet } from "react-native";  
import {Link} from 'expo-router'

//themed components

import ThemedView from "../../components/ThemedView";
import EnchantedText from "../../components/EnchantedText";
import Spacer from "../../components/Spacer";

const register = () =>{
    return(
        <ThemedView style={styles.container}>
            <Spacer/>
            <EnchantedText title={true} style={styles.title}>
                Create new account
            </EnchantedText>

            <Spacer height={100}/>
            <Link href={'/home'}>
                <EnchantedText style={{textAlign: 'center'}}>
                    Home
                </EnchantedText>
            </Link>

        </ThemedView>

    )
}   

export default register

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    }


})