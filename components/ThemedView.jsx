//a component for themed colors

import { SafeAreaView, useColorScheme, View} from 'react-native';
import {Colors} from '../constants/Colors';
import Spacer from './Spacer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ThemedView = ({style, safe=false, ...props}) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light; //either light or dark object with the theme colors inside
    const insets = useSafeAreaInsets()


    if(!safe){
        return (
            <View
                style={[{
    
                    backgroundColor: theme.background,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
    
                }, style]}
                {...props}
            />




        )
    } else{

        return(
            <View
    
                style={[{ backgroundColor: theme.background}, style]}
                {...props}
            />
        )
    }


}

export default ThemedView;