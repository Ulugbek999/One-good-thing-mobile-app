import { StyleSheet } from "react-native";

import Spacer from "../../components/Spacer"
import EnchantedText from "../../components/EnchantedText";
import ThemedView from "../../components/ThemedView";

const Profile = () => {
    return(
        <ThemedView style={styles.container}>

            <EnchantedText title={true} style={styles.heading}>
                Your email
            </EnchantedText>
            
            <Spacer/>

            <EnchantedText >Time to log some good deeds! </EnchantedText>

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