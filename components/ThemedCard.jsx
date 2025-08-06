//a component for themed card colors
import { StyleSheet } from 'react-native';
import {View, useColorScheme} from 'react-native';
import {Colors} from '../constants/Colors';

const ThemedCard = ({style,...props}) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light; //either light or dark object with the theme colors inside


    return (
        <View style={[{
            backgroundColor: theme.uiBackground}, styles.card, style]}
            {...props}
        />
            
    )
}

export default ThemedCard;

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20
    }
});