import { StyleSheet, Pressable, useColorScheme, TextInput, Keyboard, Text } from "react-native";  
import {Link} from 'expo-router'
import { useState } from "react";


//themed components

import ThemedView from "../../components/ThemedView";
import EnchantedText from "../../components/EnchantedText";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/Colors";
import ThemedBtn from "../../components/ThemedBtn";
import ThemedTextInput from "../../components/ThemedTextInput";
import { TouchableWithoutFeedback } from "react-native";
import { useUser } from "../../hooks/useUser";
import { account, avatars } from '../../lib/appwrite';
import { router } from "expo-router";


const login = () =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    //to login a user:
    const {  login } = useUser();

    const handleSubmit = async () => {
        setError(null)

        try{
            await login(email, password);
            const user = await account.get();
            
            console.log('Login successful: ', user);
            router.replace("/(dashboard)/create"); // navigating to the profile page after a successful login
            

        }catch(error){
            //console.log(error.message);
            setError(error.message)
        }

        // add functionality to show success message and redirect to the login page

    }

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light


    return(

        //functionality to hide the keyboard when touching the screen at any place but the keyboard
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >

            <ThemedView style={styles.container}>
                <Spacer/>
                <EnchantedText title={true} style={styles.title}>
                    login into your account
                </EnchantedText>

                {/* input fields for the login information */}

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

                <Spacer/>
                <ThemedBtn onPress={handleSubmit} style={styles.btn}>
                    <EnchantedText   style={{color: 'white'}}>
                        Login
                    </EnchantedText>
                </ThemedBtn>
                    {error &&  <Text style={styles.error}> {error} </Text>}

                {/* 
                    <Pressable 
                        onPress={handleSubmit}
                        style={({pressed}) => [styles.btn, pressed && styles.pressed ]}>
                        <EnchantedText style={{textAlign: 'center', color: 'white'}}>Login</EnchantedText>
                    </Pressable> */}

                <Spacer height={30}/>
                <Link href={'/register'}>
                    <EnchantedText style={{textAlign: 'center'}}>
                        Register
                    </EnchantedText>

                </Link>
                <Spacer height={15}/>
                <Link href={'/home'}>
                    <EnchantedText style={{textAlign: 'center'}}>
                        Home
                    </EnchantedText>
                </Link>

            </ThemedView>

        </TouchableWithoutFeedback>

        

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
        width: 100,
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
    },
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10,
    }


})