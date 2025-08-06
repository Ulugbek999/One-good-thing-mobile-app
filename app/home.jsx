import { StyleSheet, Text, useColorScheme, View } from "react-native"
import { Link } from 'expo-router';
import {Colors} from "../constants/Colors"
import EnchantedText from "../components/EnchantedText";
import ThemedView from "../components/ThemedView";
import BackgroundWrapper from "../components/BackgroundWrapper";


const Home = () => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light


    return (
        <BackgroundWrapper>
        <View style={[styles.container]}>
            <EnchantedText style={[styles.title, {textAlign: 'center', paddingLeft: 25, paddingBottom: 55, paddingRight: 25, fontSize: 24}]}>
                Welcome to One Good Thing!

            </EnchantedText>
            <EnchantedText style={[styles.title, {paddingLeft: 20,paddingRight: 20, paddingBottom: 55, fontSize: 20, textAlign: 'center'}]}>

            One Good Thing is your daily journal for positive actions—add the good things you did today and look back any time.
            </EnchantedText>

            <Link href={"/login"} style={styles.link}>Login</Link>
            <Link href={"/register"} style={styles.link}>Register</Link>
            <Link href={"/profile"} style={styles.link}>Profile</Link>




        </View>
        </BackgroundWrapper>
    )

    
}

export default Home;
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'rgba(122, 122, 122, 0.5)',

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
