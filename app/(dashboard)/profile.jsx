import { ImageBackground, StyleSheet } from "react-native";

import Spacer from "../../components/Spacer"
import EnchantedText from "../../components/EnchantedText";
import ThemedView from "../../components/ThemedView";
import { UserContext } from "../../contexts/UserContext";
import { useUser } from "../../hooks/useUser";
import ThemedBtn from "../../components/ThemedBtn";
import { router } from "expo-router";
import { Link } from "expo-router";
import BackgroundWrapper from "../../components/BackgroundWrapper";



const Profile = () => {

    //logout function
    const { logout, user } = useUser();


    const handleLogout = async () => {
        await logout();  // Calling the logout
        router.replace("../home"); // Navigate to the home page after logout
      };




    return(

        <BackgroundWrapper>

        <ThemedView style={styles.container}>


        {user ? (
        <EnchantedText title={true} style={styles.heading}>
            <EnchantedText>Your email: </EnchantedText>
            {user.email}
        </EnchantedText>
        ) : (
        <EnchantedText title={true} style={styles.heading}>
            No user currently logged in. Log in from the home page
            {/* add login option */}
            <Spacer/>

            <Link href={"../home"} style={[styles.link, {alignItems: "center"}]}>Home</Link>


        </EnchantedText>
        )}
            <Spacer/>
            <Spacer/>

            <EnchantedText> User information here</EnchantedText>
                        
            <Spacer/>

            <EnchantedText >Time to log some good deeds! </EnchantedText>
            <Spacer/>
            <Spacer/>
            <Spacer/>
            <ThemedBtn onPress={handleLogout} >
                <EnchantedText style={{color: 'white'}}> logout </EnchantedText>
                
            </ThemedBtn>
        </ThemedView>
        </BackgroundWrapper>
    )
    
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "top",
        alignItems: "left",
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 75
    },

    header: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },

    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
        fontWeight: 'bold',
        fontSize: 24,
    }


})