import { StyleSheet } from "react-native";
import Spacer from "../../components/Spacer";
import EnchantedText from "../../components/EnchantedText";
import ThemedView from "../../components/ThemedView";

const Create = () => {
    return (
        <ThemedView style={styles.container}>

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
        justifyContent: "center",
        alignItems: "center",
    },

    header: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },

})