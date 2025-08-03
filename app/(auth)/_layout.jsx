import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {Colors} from "../../constants/Colors";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { useUser } from "../../hooks/useUser";

const RootLayout = () => {


  const { user } = useUser();
  console.log(user);

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;



  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{
        animation: "none",
        headerStyle: {backgroundColor: theme.navBackground},
        headerTintColor: theme.title,
        }}/>
    </>
  );
};

export default RootLayout;

