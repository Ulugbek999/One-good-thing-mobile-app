import { StyleSheet } from "react-native";
import Spacer from "../../components/Spacer";
import EnchantedText from "../../components/EnchantedText";
import ThemedView from "../../components/ThemedView";

const Create = () => {
    return (
        <ThemedView style={styles.container} safe={false}>
            
            <EnchantedText title={true} style={styles.heading}>
                Add one good thing you did today!
            </EnchantedText>
            <Spacer/>
        </ThemedView>


    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "top",
        alignItems: "center",
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