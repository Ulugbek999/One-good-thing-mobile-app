import { StyleSheet, Text, View } from "react-native";
import {Stack} from 'expo-router';

const RootLayout = () => {
    return(
            <Stack screenOptions={{
                headerStyle: {backgroundColor: '#ddd'},
                headerTintColor: '#333',
            }}>
                <Stack.Screen name="index" options={{title: "Home", headerShown: false}} />
                <Stack.Screen name="home" options={{title: "Home"}} />
                <Stack.Screen name="contact" options={{title: "Contact"}} />
            </Stack>
    )
}

export default RootLayout
const styles = StyleSheet.create({

});
