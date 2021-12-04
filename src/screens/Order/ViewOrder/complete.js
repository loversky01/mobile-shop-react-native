import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const complete = ({ navigation }) => {
    return (
        <View style={styles.container}>
        
            <AntDesign name="checkcircle" size={100} color="green" style= {{marginTop: 80}}/>
            <Text style={styles.text1}>Thành công!</Text>
            <Text style={styles.text}>Đơn hàng đã được thêm thành công.</Text>
            <Text style={styles.text}>Để kiểm tra thông tin vui lòng truy cập 
            "Đơn hàng của tôi" trong tab "Hồ sơ cá nhân".</Text>

            <View style={styles.button}>
              <Button title='ĐƠN HÀNG CỦA TÔI'  onPress={() => {
              navigation.navigate("Payment");
            }}/>
              <AntDesign name="rightcircle" size={24} color="white" style= {{
              position:'absolute',right:5,top:5}} />
            </View>
        </View>
    );
}
export default complete;
const styles = StyleSheet.create({
        container: {
          flex:1,
          justifyContent: "center",
          alignItems: "center",
          padding: 50,backgroundColor:"#EEEEEE",
        },

        text1: {
          textAlign: "center",
          fontSize: 25,
          margin: 20,
        },

        text: {
            textAlign: "center",
        },

        button: {
          width:"80%",
          margin: 40,
        }
});