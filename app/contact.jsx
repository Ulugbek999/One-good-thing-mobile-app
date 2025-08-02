import { StyleSheet, Text, View } from "react-native"
import { Link } from 'expo-router';

const Contact = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Page </Text>

            <Link href={"/"} style={styles.link}>Log out</Link>
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
