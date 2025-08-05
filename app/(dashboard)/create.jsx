import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import Spacer from "../../components/Spacer";
import EnchantedText from "../../components/EnchantedText";
import ThemedView from "../../components/ThemedView";
import ThemedBtn from "../../components/ThemedBtn";
import ThemedTextInput from "../../components/ThemedTextInput";

import { useThings } from "../../hooks/useThings";
import { useRouter } from "expo-router";
import { useState } from "react";



const Create = () => {

    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");
    const [loading, setLoading] = useState(false);

    const {createThing} = useThings();
    const router = useRouter();

    const handleSubmit = async () => {
        //if(!title.trim()) return
        
        setLoading(true);
        await createThing({title, notes})
        //add error handling later

        setTitle("");
        setNotes("");
        //redirect the user
        router.replace('/calendar');

        //reset loading state
        setLoading(false);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <EnchantedText title={true} style={styles.header}>
                    Add new Good Thing!
                </EnchantedText>
                <Spacer/>

                <ThemedTextInput
                    style={styles.input}
                    placeholder="Good thing title..."
                    value={title}
                    onChangeText = {setTitle}
                />
                <Spacer/>

                <ThemedTextInput
                    style={[styles.input, {paddingTop: 80}]}
                    placeholder="Additional notes..."
                    value={notes}
                    onChangeText={setNotes}
                    multiline = {true}
                />
                <Spacer/>

                <ThemedBtn onPress={handleSubmit} disabled={loading}>
                    <Text style={{color: '#fff'}}>
                        {loading ? "Saving..." : "Create a new good thing"}
                    </Text>
                </ThemedBtn>

            </ThemedView>
        </TouchableWithoutFeedback>


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
    input: {
        padding: 20,
        borderRadius: 6,
        alignSelf: 'stretch',
        marginHorizontal: 40
    },
    multiline: {
        padding: 20,
        borderRadius: 6,
        minHeight: 100,
        alignSelf: 'stretch',
        marginHorizontal: 40,
    }

})