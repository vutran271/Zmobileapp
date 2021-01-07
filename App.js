import { StatusBar } from "expo-status-bar";
import React from "react";
import { WebView } from "./node_modules/react-native-webview";
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import bgImg from "./assets/background.jpg";
import * as ImagePicker from "./node_modules/expo-image-picker";
import logo from "./assets/zenLogo.jpeg";

export default function App() {
  let op = async () => {
    let permission = await ImagePicker.getCameraPermissionsAsync();
    if (permission.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  };

  return (
    <WebView
      source={{ uri: "https://zenspanail.com" }}
      style={styles.container}
    >
      <View style={styles.LogoContainter}>
        <Image source={logo} style={styles.logo}></Image>
      </View>
    </WebView>
  );
}

const styles = StyleSheet.create({
  LogoContainter: {
    flex: 1,
    height: 200,
  },
  logo: {
    width: 180,
    height: 180,
    marginLeft: 10,
  },
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
