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
  ActivityIndicator,
} from "react-native";
import bgImg from "./assets/background.jpg";
import * as ImagePicker from "./node_modules/expo-image-picker";
import logo from "./assets/zenLogo.jpeg";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MainPage } from "./src/zenContainer/MainPage"

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
      url: "https://zenspanail.com/", 
      visible : false,
      logoVisible : true,
    }
  }

  navStateChange = (navState) => {
    console.log(navState);
    if(navState.url === this.state.url) {
      this.setState({logoVisible:true})
    }
    else{
      this.setState({logoVisible:false})
    }
  }

  showLoading = () => {
    this.setState({visible: true})
  }
  hideLoading = () => {
    this.setState({visible:false})
  }


  goToHomePage = () => {
      const redirectTo = 'window.location = "' + this.state.url + '"';
      this.webview.injectJavaScript(redirectTo);
      this.setState({logoVisible:true});
  }

  onNavStateChange = () => {

  }

  login = true ? "account-arrow-left" : "account-arrow-right";

  render() {
    const ActivityIndicatorElement = () => {
      return (
        <View style={styles.activityIndicatorStyle}>
          <ActivityIndicator
            color="green"
            size="large"
          />
        </View>
      );
    };
    return (
      <SafeAreaView style={ styles.MainContainer }>
        <View style = { styles.container}>
          <MainPage />
        </View>
        
        {/* // LOGO SECTION */}
        {this.state.logoVisible ? <View style={styles.LogoTitle}>
          <Image style={ styles.logo } source = { logo }></Image>
        </View> : null}

        <View style={styles.menu}>
          <TouchableOpacity onPress={ this.goToHomePage}>
          <AntDesign name="home" size={35} color="grey" />       
          </TouchableOpacity>
          <TouchableOpacity>
          <MaterialCommunityIcons name= {this.login} size={35} color="grey" /> 
          </TouchableOpacity>
         </View>     
        {this.state.visible ? <ActivityIndicatorElement /> : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  LogoTitle : {
    position:"absolute",
    bottom:650,
    backgroundColor: null,
    color: "red",
    flex:0.09,
    width:"100%",
    height:60,
    width:"50%",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  container: {
    flex:1,
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
  },
  MainContainer: {
    flex: 1,
    backgroundColor: "green",
    flexDirection:"column"
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
