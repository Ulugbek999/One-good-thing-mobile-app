import { Text, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

const EnchantedText = ({ style, title = false, ...props }) => {

    const realm = useColorScheme(); // Detecting the current color theme (light or dark)
    const potion = Colors[realm] ?? Colors.light; // Choosing the proper color 
    const ink = title ? potion.title : potion.text; // Using royal ink for titles, humble ink for body

    return (
        <Text
            style={[
                { 
                    color: ink, 
                    fontFamily: 'FrederickaTheGreat_400Regular' // whimsical font here
                },
                style
            ]}
            {...props}
        />
    );
};

export default EnchantedText;
