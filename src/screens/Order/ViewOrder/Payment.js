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
function Payment({ navigation }) {
  return (
    
    <View style={{ paddingTop: 15 }}>
        <TouchableOpacity    activeOpacity={0.5}
            onPress={() => navigation.navigate("location")}
          >
      <View>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginLeft: 15 }}>
          Kiểm tra đơn hàng
        </Text>
        {/*  */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                marginTop: 15,
                marginLeft: 15,
                fontSize: 20,
                color: "gray",
              }}
            >
              ĐỊA CHỈ GIAO HÀNG
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 15 }}>
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
              name="chevron-circle-right"
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
      <View style={{ flexDirection: "row", paddingTop: 20, width: 200 }}>
        <Image
          style={{ width: 50, height: 50, marginLeft: 15 }}
          source={require("../../../../assets/itemImage.jpg")}
        ></Image>

        <View style={{ flexDirection: "column" }}>
          <Text style={{ marginTop: 5, marginLeft: 15, fontSize: 20 }}>
            Bông Ipek Klasik Cotton
          </Text>
          <View style={{ flexDirection: "row" }}>
          <Text
            style={{ marginTop: 5, marginLeft: 15, fontSize: 20, color: "blue" }}
          >
            đ 25.000
          </Text>
          </View>
          <Separator />
          <TextInput
          style={{fontStyle:"italic",fontSize: 15}}
        placeholder="Gửi tin nhắn đến người bán"

      />
        </View>
      </View>
      <Separator />
      <View style={{ flexDirection: "column"}}>
      <FontAwesome5
              name="box-open"
              size={30}
              color="pink"
              style={{
                position: "absolute",
                left: 15,
                top: 60,
              }}></FontAwesome5>
              <Text
            style={{ marginTop: 55, marginLeft: 90, fontSize: 20, color: "blue" }}
          >
            Thêm mã giảm giá
          </Text>
          <FontAwesome5
              name="chevron-circle-right"
              size={30}
              color="black"
              style={{
                position: "absolute",
                right:20,
                top: 50,
              }}></FontAwesome5>
      </View>
      <Separator />
        {/* Thanh toan */}
        <View style={{ flexDirection: "row" , marginTop:45}}>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 15,
              fontSize: 20,
              color: "gray",
            }}
          >
            TỔNG CỘNG
          </Text>
          <Text
            style={{
              marginTop: 15,
              marginLeft: 15,
              fontSize: 18,
              color: "black",
              fontWeight: "bold",
            }}
          >
            đ 3.567.890
          </Text>
          <Text
            style={{
              marginTop: 15,
              marginLeft: 15,
              fontSize: 15,
              color: "gray",
            }}
          >
            Miên phí vận chuyển{"\n"}tại Hà Nội
          </Text>
        </View>
        {/* Nút thanh toán */}
        <View style={{ paddingTop: 30, flexDirection: "column" }}>
          <TouchableOpacity
            style={{
              marginTop: 10,
              paddingTop: 15,
              paddingBottom: 20,
              paddingRight: 40,
              marginLeft: 40,
              marginRight: 40,
              backgroundColor: "blue",
              borderRadius: 30,
              borderWidth: 1,
              borderColor: "green",
            }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("complete")}
          >
            <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>
              {" "}
              ĐẶT HÀNG{" "}
            </Text>
            <FontAwesome5
              name="chevron-circle-right"
              size={30}
              color="white"
              style={{
                position: "absolute",
                left: 120,
                top: 13,
              }}
            />
          </TouchableOpacity>
        </View>
    </View>
    </View>
  );
}

export default Payment;
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
