// a component to add some space

import {View} from 'react-native'

const Spacer = ({width = "100%", height = 80}) => {
    return(
        <View style = {{width, height}} />
    )
}

export default Spacer