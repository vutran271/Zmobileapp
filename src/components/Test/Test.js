import React from "react";
import { SafeAreaView, View, StyleSheet, Image, Text } from "react-native";
console.log("this is call first");

export class Test extends React.Component {
    constructor(props){
        super(props)
        console.log(props);
    }   
    render() {
        return (
            <Text style={{color:"red", fontSize:30}}>Haha </Text>
        )
    }

}
