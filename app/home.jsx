import { StyleSheet, Text, useColorScheme, View } from "react-native"
import { Link } from 'expo-router';
import {Colors} from "../constants/Colors"
import EnchantedText from "../components/EnchantedText";
import ThemedView from "../components/ThemedView";


const Home = () => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light


    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>

            <EnchantedText style={[styles.title, {paddingLeft: 25, paddingBottom: 25}]}>

                One Good Thing is an app that lets you log in one (or more) good things you did today!

            </EnchantedText>

            <Link href={"/login"} style={styles.link}>Login</Link>
            <Link href={"/register"} style={styles.link}>Register</Link>
            <Link href={"/profile"} style={styles.link}>Profile</Link>




        </View>
    )

    
}

export default Home;
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(122, 122, 122, 0.5)',

    },  

    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },

    image: {
        marginVertical: 20,
        width: 250,
        height: 250,
        borderRadius: 25

    },

    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
        fontWeight: 'bold',
        fontSize: 24,
    }



})
