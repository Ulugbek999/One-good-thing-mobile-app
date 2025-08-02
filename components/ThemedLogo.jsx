//a component for themed logo colors

import {View, useColorScheme} from 'react-native';
import {Colors} from '../constants/Colors';

const ThemedLogo = ({style,...props}) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light; //either light or dark object with the theme colors inside


    return (
        <View style={[{
            backgroundColor: theme.ui}, styles.logo, style]}
            {...props}
        />
            
    )
}

export default ThemedLogo;

const styles = StylesSheet.create({
    logo: {
        borderRadius: 5,
        padding: 20
    }
});