import { StyleSheet, Text, View, useColorScheme } from "react-native"
import { Link } from 'expo-router';
import { Colors } from "../constants/Colors";

const Contact = () => {
    
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light


    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Text style={styles.title}>Contact Page or maybe login/register page </Text>

            <Link href={"/home"} style={styles.link}>Log out</Link>
        </View>
    )

    
}

export default Contact;
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
