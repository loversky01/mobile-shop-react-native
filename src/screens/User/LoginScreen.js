import React from 'react';
import { StyleSheet, View, Dimensions, Animated,Text } from "react-native";
import styles from './styles';
import MenuImage from '../../components/MenuImage/MenuImage';
import { Input, Header, Button, Icon } from "../../components/LoginButton/index";
const { height } = Dimensions.get("screen");

const alignment= new Animated.Value(0);

const toDocumentsPage = () => {
  Animated.timing(alignment, {
    toValue: 1,
    duration: 500,
    useNativeDriver: false,
  }).start();
};

const backToMainComponent = () => {
  Animated.timing(alignment, {
    toValue: 0,
    duration: 500,
    useNativeDriver: false,
  }).start();
};

const heightIntropolate = alignment.interpolate({
  inputRange: [0, 1],
  outputRange: [height, 0],
});

const opacityIntropolate = alignment.interpolate({
  inputRange: [0, 1],
  outputRange: [1, 0],
});

const documentPageOpacityIntropolate = alignment.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 1],
});

const documentPageHeightIntropolate = alignment.interpolate({
  inputRange: [0, 1],
  outputRange: [0, height],
});

const mainContainerStyle = {
  height: heightIntropolate,
  opacity: opacityIntropolate,
};

const documentContainerStyle = {
  height: documentPageHeightIntropolate,
  opacity: documentPageOpacityIntropolate,
};
export default class LoginScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
    headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  });

  render() {
    return (
      <View style={styles.container}>
      <Animated.View style={[styles.mainContainer, mainContainerStyle]}>
        <View style={{ width: "100%" }}>
          <Header title="Đăng nhập" subTitle="Đăng nhập để mua sắm - Gì cũng có!!" />
        </View>
        <View>
          <Input icon="md-mail" placeholder="Email" />
          <Input icon="lock-closed"  placeholder="Mật khẩu" />
        
        </View>
        <Button  title="ĐĂNG NHẬP " />
        <Button onPress={() => toDocumentsPage()} title="ĐĂNG KÝ " />

      </Animated.View>
      <Animated.View style={[styles.mainContainer, documentContainerStyle]}>
      
        <View style={{ width: "100%" }}>
          <Header title="Đăng ký"  />
        </View>
        <View>
          <Input icon="md-mail" placeholder="Email" />
          <Input icon="lock-closed"  placeholder="Mật khẩu" />
          <Input icon="lock-closed" placeholder="Nhập lại mật khẩu" />
          <Input icon="md-person" placeholder="Họ & Tên" />
          <Input icon="ios-phone-portrait" placeholder="Điện thoại" />
          <Input icon="ios-home" placeholder="Địa chỉ" />
        </View>
        <Button
          title="ĐĂNG NHẬP"
          onPress={() => backToMainComponent()}
        />
        <Button onPress={() => toDocumentsPage()} title="TIẾP TỤC" />
      </Animated.View>
    </View>
    );
  }
}
