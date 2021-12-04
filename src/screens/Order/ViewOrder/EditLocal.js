import React, { useState } from "react";

import {SafeAreaView, StyleSheet, Text, View, Image, TextInput, Button,Linking } from "react-native";
import { FontAwesome,AntDesign, MaterialIcons  } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CheckBox, Icon } from "react-native-elements";
const Stack = createNativeStackNavigator();
const Separator = () => (
    <View
      style={{
        marginVertical: 8,
        borderBottomColor: "#737373",
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />)
export default function EditLocal({navigation} ) {
    // const [value, setValue] = useState<string[]>([])
    const [check2, setCheck2] = useState(false);
  return (

    <SafeAreaView style={styles.container}>
      <View>
        <View style={{ flexDirection: "row" }}>
          {/* <FontAwesome name="registered" size={24} color="black" /> */}
          <Text style={{ color: "black", fontSize: 28 }}>ĐỊA CHỈ NHẬN HÀNG</Text>
        </View>
        <View>
            <View style = {styles.inputTextGroup}>  
                <AntDesign style = {{paddingTop: 10, marginLeft: 5,}} name="user" size={32} color="#91F2F2" />         
                <TextInput        
                    style={styles.inputText1}      
                    placeholder="Họ và tên"
                    keyboardType="default" 
                    inlineImageLeft="username"
                />            
            </View>  
        </View>
        <View>
            <View style = {styles.inputTextGroup}>  
                <MaterialIcons style = {{paddingTop: 10, marginLeft: 5,}} name="home" size={32} color="#91F2F2" />         
                <TextInput        
                    style={styles.inputText1}      
                    placeholder="Địa chỉ"
                    keyboardType="default" 
                    inlineImageLeft="username"
                />            
            </View>  
        </View>
        <View>
            <View style = {styles.inputTextGroup}>  
                <AntDesign style = {{paddingTop: 10, marginLeft: 5,}} name="mobile1" size={32} color="#91F2F2" />         
                <TextInput        
                    style={styles.inputText1}      
                    placeholder="Mobile"
                    keyboardType="default" 
                    inlineImageLeft="username"
                />            
            </View>  
        </View>
        <View> 
        <Separator></Separator>
        </View>
        {/*  */}
        <CheckBox
        center
        title="Đặt làm mặc định"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check2}
        onPress={() => setCheck2(!check2)}
      />
      
        <View style = {styles.buttonText}>
           <Button 
               title="XÁC NHẬN"    
           />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',    
  },
  inputTextGroup:{
    paddingTop: 30,
    flexDirection: 'row',
  },
  inputText1: {
    padding: 15,  
    width: 250,
    height: 50,
    borderBottomWidth: 1,
  },
  buttonText:{
    marginTop: 50,
    backgroundColor: '#91F2F2',
    width: 300,
    height: 40,
    borderRadius: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});