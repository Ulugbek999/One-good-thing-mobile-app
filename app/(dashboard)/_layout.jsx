import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import UserOnly from "../../components/auth/UserOnly";


const DashboardLayout = () => {
    const colorScheme = useColorScheme();
    const theme = colorScheme[Colors] ?? Colors.light; //as a backup in case the value is null defaulting to light theme

    return (

        <UserOnly>



        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.navBackground,
                    paddingTop: 10,
                    height: 90
                    },  
                tabBarActiveTintColor: theme.iconColorFocused,
                tabBarInactiveTintColor: theme.iconColor

                }}

        >
            {/* Bottom navigation screen tabs */}
            <Tabs.Screen 
                name="profile"
                options={{ title: "Profile", tabBarIcon: ({focused}) => (
                    <Ionicons
                        size={24}
                        name={focused ? 'person' : 'person-outline'}
                        color={focused ? theme.iconColorFocused : theme.iconColor}
                    />
                )}}
            />


            <Tabs.Screen 
                name="create"
                options={{title: "Create", tabBarIcon:({focused}) => (
                    <Ionicons
                        size={24}
                        name={focused ? 'newspaper' : 'newspaper-outline'}
                        color={focused ? theme.iconColorFocused : theme.iconColor}
                    />
                )}}
            />  


            <Tabs.Screen 
                name="calendar"
                options={{title: "Calendar", tabBarIcon: ({focused}) => (
                    <Ionicons
                        size={24}
                        name={focused ? 'calendar' : 'calendar-outline'}
                    />
                )}}
            /> 

        



        </Tabs>


        </UserOnly>
    )


}

export default DashboardLayout;