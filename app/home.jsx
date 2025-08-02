import { StyleSheet, Text, useColorScheme, View } from "react-native"
import { Link } from 'expo-router';
import {Colors} from "../constants/Colors"


const Home = () => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light


    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Text style={styles.title}>Home page (General information about the app and navigation to the log in/register page)</Text>

            <Link href={"/contact"} style={styles.link}>Log out</Link>
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
