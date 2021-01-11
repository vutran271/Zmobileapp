import React from "react"
import {Image, StyleSheet,Text,View,SafeAreaView} from "react-native"
import {WebView} from "react-native-webview"
import {logo} from "../../../assets/zenLogo.jpeg";


export class MainPage extends React.Component {
    constructor(props){
        super(props)
        this.url = "https://zenspanail.com"
    }

    render() {
        return (
            <WebView
              source={{
                uri: this.url,
              }}
              style={styles.container}
            >
              <View style={styles.LogoContainter}>
                <Image style={styles.logo} source={logo}></Image>
              </View>
            </WebView>
        );
    }
}
const styles =  StyleSheet.create(
    {
    LogoContainter: {
      height: 100,
      backgroundColor:"red",
      width:"80%",
    },
    logo: {
      width: 110,
      height: 60,
    },
    container: {
        flex: 1,
      }, 
  });