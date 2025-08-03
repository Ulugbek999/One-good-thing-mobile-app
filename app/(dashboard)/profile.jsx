import { StyleSheet } from "react-native";

import Spacer from "../../components/Spacer"
import EnchantedText from "../../components/EnchantedText";
import ThemedView from "../../components/ThemedView";
import { UserContext } from "../../contexts/UserContext";
import { useUser } from "../../hooks/useUser";
import ThemedBtn from "../../components/ThemedBtn";
import { router } from "expo-router";

const Profile = () => {

    //logout function
    const { logout } = useUser();


    const handleLogout = async () => {
        await logout();  // Calling the logout
        router.replace("../home"); // Navigate to the home page after logout
      };


    return(
        <ThemedView style={styles.container}>

            <EnchantedText title={true} style={styles.heading}>
                Your email
            </EnchantedText>
            
            <Spacer/>

            <EnchantedText >Time to log some good deeds! </EnchantedText>

            <ThemedBtn onPress={handleLogout} >
                <EnchantedText> logout </EnchantedText>
                
            </ThemedBtn>

        </ThemedView>
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

})