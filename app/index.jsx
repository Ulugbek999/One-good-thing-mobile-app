import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";
import LogoLight from '../assets/img/logoLight.png'; 
import LogoDark from '../assets/img/logoDark.png'; 
import { useEffect } from "react";
import { router } from "expo-router";

const SplashScreen = () => {

    const colorScheme = useColorScheme();

    const pickLogo = () => {
      return colorScheme === "light" ? LogoLight : LogoDark;
    };


    useEffect(() => {
        setTimeout(() => {
        router.replace("/home"); // navigating to the home directory aftert 3.5 seconds
        }, 3500);
    }, []);


  return (
    <View style={styles.container}>
      <Image source={pickLogo()} style={styles.image} />
      <Text style={styles.tagline}>One good thing is more than zero</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(122, 122, 122, 0.5)',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },

  tagline: {
    marginTop: 20,
    fontSize: 18,
    color: '#444',
  },

  image: {
    marginVertical: 20,
    width: 250,
    height: 250,
    borderRadius: 25,
  },

  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    fontWeight: 'bold',
    fontSize: 24,
  },
});
