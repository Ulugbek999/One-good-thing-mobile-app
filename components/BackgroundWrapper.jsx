import React from "react";
import { ImageBackground, StyleSheet, useColorScheme } from "react-native";
import wallpaperLight from "../assets/img/wallpaperLight.png";
import wallpaperDark from "../assets/img/wallpaperDark.png";

export default function BackgroundWrapper({ children }) {
  const colorScheme = useColorScheme();
  const bg = colorScheme === "light" ? wallpaperLight : wallpaperDark;

  return (
    <ImageBackground
      source={bg}
      style={styles.bg}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
  }
});
