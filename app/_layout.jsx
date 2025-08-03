import { StyleSheet, useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <StatusBar />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
          contentStyle: { backgroundColor: theme.background }, 
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
        <Stack.Screen name="home" options={{ title: "Home" }} />
        <Stack.Screen name="(auth)" options={{headerShown: false}}/>
        <Stack.Screen name="(dashboard)" options={{headerShown: false}}/>


        
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
