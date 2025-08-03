import { StyleSheet, Pressable, useColorScheme } from "react-native";  
import {Link} from 'expo-router'
import { Colors } from "../../constants/Colors";

//themed components

import ThemedView from "../../components/ThemedView";
import EnchantedText from "../../components/EnchantedText";
import Spacer from "../../components/Spacer";
import ThemedBtn from "../../components/ThemedBtn";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";

const register = () =>{


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')    

    const handleSubmit = () => {
        console.log('Register form submitted: Email: ', email, "; Password: ", password, "; ");

        // add functionality to show success message and redirect to the login page

    }


    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return(
        <ThemedView style={styles.container}>
            <Spacer/>
            <EnchantedText title={true} style={styles.title}>
                Create new account
            </EnchantedText>

            {/* Input fields for registration */}
            <ThemedTextInput 
            
                style={{
                    width: '80%',
                    marginBottom: 20

                }}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
        
            /> 

            <ThemedTextInput 
                    
                style={{
                    width: '80%',
                    marginBottom: 20

                }}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                
            /> 



            <ThemedBtn onPress={handleSubmit} style={styles.btn}>
                <EnchantedText style={{color: "white"}}>
                    Register
                </EnchantedText>
            </ThemedBtn>


            {/* <Pressable 
                onPress={handleSubmit}
                style={({pressed}) => [styles.btn, pressed && styles.pressed ]}>
                <EnchantedText style={{textAlign: 'center', color: 'white'}}>Register</EnchantedText>
            </Pressable> */}


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
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
    btn: {
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 4.84,        
    },
    pressed: {
        opacity: 0.8
    }


})