import { StyleSheet, Pressable, useColorScheme,Text } from "react-native";  
import {Link} from 'expo-router'
import { Colors } from "../../constants/Colors";

//themed components

import ThemedView from "../../components/ThemedView";
import EnchantedText from "../../components/EnchantedText";
import Spacer from "../../components/Spacer";
import ThemedBtn from "../../components/ThemedBtn";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import BackgroundWrapper from "../../components/BackgroundWrapper";

const register = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    //to register a user:
    const {  register } = useUser();

    const handleSubmit = async () => {
        setError(null);

        try{
            await register(email, password);
            console.log('Register form submitted: Email: ', email, "; Password: ", password, "; ");

        }catch(error){
            setError(error.message);
        }

        // add functionality to show success message and redirect to the login page

    }


    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return(

        <BackgroundWrapper>
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
            <Spacer/>
            {error &&  <Text style={styles.error}> {error} </Text>}
            


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
        </BackgroundWrapper>

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