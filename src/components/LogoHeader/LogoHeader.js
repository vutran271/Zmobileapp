import React from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import logo from "./assets/zenLogo.jpeg";

class LogoHeader extends React.Component {
  url;
  render() {
    return (
      <View style={styles.containter}>
        <Image source={logo} style={styles.logo}></Image>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  containter: {
    flex: 1,
    height: 200,
  },
  logo: {
    width: 180,
    height: 180,
    marginLeft: 10,
  },
});

export default LogoHeader;
