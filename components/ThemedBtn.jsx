import {Pressable, StyleSheet} from 'react-native'
import {Colors} from '../constants/Colors'

function ThemedBtn ({style, ...props}){


    return (
        <Pressable
            style={({pressed}) => [styles.btn, pressed && styles.pressed,
                style]}
                {...props}
        />
    )


}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 18,
        borderRadius: 6,
        marginVertical: 8
    },
    pressed: {
        opacity: 0.8
    },
})

export default ThemedBtn 

