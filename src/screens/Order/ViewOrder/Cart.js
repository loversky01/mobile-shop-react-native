import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
import Header from "../../../components/Order/Header";
import ItemsContainer from "../../../components/Order/ItemsContainer";
import BasketContainer from "../../../components/Order/BasketComponent";
import TotalComp from "../../../components/Order/TotalComponent";
// import Footer from './components/Footer';
import Payment from "./Payment";
const Cart = ({ navigation }) => {
  // export default class Cart extends Component {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ItemsContainer />
      <BasketContainer />
      <View style={styles.containerStyle}>
        <TotalComp />
        <View style = {styles.buttonText}>
          <Button
            onPress={() => {
              navigation.navigate("Payment");
            }}
            title="Thanh toán"
          />
        </View>
      </View>
    </View>
  );
};
export default Cart;

const styles = {
  containerStyle: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    borderTopWidth: 1,
    borderColor: "#e2e2e2",
  },

  buttonText:{
    marginTop: 30,
    marginLeft: 30,
    backgroundColor: '#91F2F2',
    width: 300,
    height: 40,
    borderRadius: 10,
  },
  }

