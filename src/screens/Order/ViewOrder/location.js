import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,Button
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
const Separator = () => (
  <View
    style={{
      marginVertical: 8,
      borderBottomColor: "#737373",
      borderBottomWidth: StyleSheet.hairlineWidth,
    }}
  />)

  function Location({ navigation }) {
    return (
      
      <View style={{ paddingTop: 15 }}>
          <TouchableOpacity    activeOpacity={0.5}
            >
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 15 ,marginTop: 15,color: "black"}}>
                Trần Đình Minh Vương
              </Text>
              <Text
                style={{
                  marginTop: 15,
                  marginLeft: 15,
                  fontSize: 15,
                  color: "gray",
                }}
              >
                Tòa R1, {"\n"}Chung cư Royal City,
                {"\n"}72A Nguyễn Trãi,
                {"\n"}Hà Nội.
              </Text>
            </View>
          
            <View style={{paddingTop: 100,paddingLeft:20}}>
            <FontAwesome5
                name="edit"
                size={30}
                color="black"
                style={{
                  position: "absolute",
                  left: 120,
                  top: 50,
                }}></FontAwesome5>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <Separator></Separator>
        
        <TouchableOpacity    activeOpacity={0.5}   onPress={() => navigation.navigate("EditLocal")}
            >
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column" }}>

              <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 15 ,marginTop: 15,color: "black"}}>
                Thêm địa chỉ mới
              </Text>
            </View>
          
            <View style={{paddingTop: 100,paddingLeft:20}}>
            <FontAwesome5
                name="plus"
                size={30}
                color="black"
                style={{
                  position: "absolute",
                  left: 170,
                  top: 20,
                }}></FontAwesome5>
            </View>
       
          </View>
        </View>
        </TouchableOpacity>
        <Separator></Separator>
        </View>
    );
  }
  
  export default Location;
  const styles = StyleSheet.create({
    container: {
      paddingTop: 25,
      flex: 5,
      top: 5,
    },
    addressItem: {
      height: 150,
      backgroundColor: "white",
    },
    address: {
      justifyContent: "center",
      alignItems: "center",
    },
    infoProduct: {
      top: 10,
      width: "100%",
      backgroundColor: "white",
      flexDirection: "column",
    },
    product: {
      top: 20,
      width: "100%",
      height: 150,
      paddingStart: 20,
      backgroundColor: "#ECECEC",
      flexDirection: "row",
    },
    voucher: {
      flexDirection: "row",
      top: 10,
      height: 50,
      paddingStart: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#ECECEC",
    },
    allToPay: {
      backgroundColor: "white",
      top: 20,
      height: 150,
    },
    scrollView: {
      marginTop: 5,
    },
    login: {
      marginTop: 5,
      marginLeft: 20,
      height: 350,
      width: "100%",
      backgroundColor: "#fff",
      // alignItems: "center",
    },
    text: {
      fontSize: 15,
      marginLeft: 60,
      color: "#447BDB",
      marginBottom: 10,
    },
    input1: {
      marginLeft: 1,
      margin: 2,
      borderWidth: 1,
      width: 220,
    },
  });
  