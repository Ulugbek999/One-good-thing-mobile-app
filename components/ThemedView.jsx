//a component for themed colors

import {View, useColorScheme} from 'react-native';
import {Colors} from '../constants/Colors';

const ThemedView = ({style,...props}) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light; //either light or dark object with the theme colors inside


    return (
        <View style={[{
            backgroundColor: theme.background}, style]}
            {...props}
        />
            
    )
}

export default ThemedView;