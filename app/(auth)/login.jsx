import { StyleSheet, Pressable, useColorScheme } from "react-native";  
import {Link} from 'expo-router'

//themed components

import ThemedView from "../../components/ThemedView";
import EnchantedText from "../../components/EnchantedText";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/Colors";
import ThemedBtn from "../../components/ThemedBtn";

const login = () =>{

    const handleSubmit = () => {
        console.log('login form submitted');
    }

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light


    return(
        <ThemedView style={styles.container}>
            <Spacer/>
            <EnchantedText title={true} style={styles.title}>
                login into your account
            </EnchantedText>

            <ThemedBtn onPress={handleSubmit}>
                <EnchantedText style={{color: theme.EnchantedText}}>
                    Login
                </EnchantedText>
            </ThemedBtn>

            {/* 
            <Pressable 
                onPress={handleSubmit}
                style={({pressed}) => [styles.btn, pressed && styles.pressed ]}>
                <EnchantedText style={{textAlign: 'center', color: 'white'}}>Login</EnchantedText>
            </Pressable> */}

            <Spacer height={100}/>
            <Link href={'/register'}>
                <EnchantedText style={{textAlign: 'center'}}>
                    Register
                </EnchantedText>

            </Link>
            <Spacer/>
            <Link href={'/home'}>
                <EnchantedText style={{textAlign: 'center'}}>
                    Home
                </EnchantedText>
            </Link>

        </ThemedView>

    )
}   

export default login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8
    }


})