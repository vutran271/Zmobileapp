import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { WebView } from "./node_modules/react-native-webview";
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";
import bgImg from "./assets/background.jpg";
import * as ImagePicker from "./node_modules/expo-image-picker";
import logo from "./assets/zenLogo.jpeg";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


let op = async () => {
  let permission = await ImagePicker.getCameraPermissionsAsync();
  if (permission.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }
  let pickerResult = await ImagePicker.launchImageLibraryAsync();
  console.log(pickerResult);
};


export default class App extends React.Component {
  webview = null;
  constructor(props){
    super(props);
    this.state = {
      url: "https://zenspanail.com",
    }
  }
  onNavStateChange = (NavState) => {
    console.log(NavState);
    if(NavState.cangoback){
      this.setState(this.state.url, ()=>{ this.state.url = this.state.url})
    }
  }

  login = true ? "account-arrow-left" : "account-arrow-right";

  render() {
    return (
      <SafeAreaView style={ styles.MainContainer }>
        <WebView
        ref={(ref) => {
          (this.webview = ref);
        }}
        source={{ uri: this.state.url }}
        onNavigationStateChange={this.onNavStateChange} >
        </WebView>
        <View style={styles.menu}>
        <TouchableOpacity onPress={ this.onNavStateChange}>
         <AntDesign name="home" size={35} color="grey" />       
        </TouchableOpacity>
        <MaterialCommunityIcons name= {this.login} size={35} color="grey" /> 
        <MaterialCommunityIcons name= {this.login} size={35} color="grey" /> 
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:8
  },
  menu: {
    flex:0.09,
    backgroundColor:"white",
    borderColor:"black",
    shadowColor:"black",
    shadowOpacity: 0.5,
    shadowRadius:3,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  logo: {
    width: 80,
    height: 60,
    marginTop:5
  },
  MainContainer: {
    flex: 1,
    backgroundColor: "green",
    flexDirection:"column"
  },
});
