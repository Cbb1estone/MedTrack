import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  SafeAreaView
} from "react-native";

export default function Login(){
  return(
    <SafeAreaView style={{backgroundColor:"#832603"}}>
      <View>
        <Text style={{color:"white",fontSize:18,fontWeight:"bold",fontFamily:"baskerville", marginVertical:12}}>
          <Text>Medtrack</Text>
        </Text>
      </View>
      <View>
        <Text> Registrate </Text>
      </View>
    </SafeAreaView>
  )

}