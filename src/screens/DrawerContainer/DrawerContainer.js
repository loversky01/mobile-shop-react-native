import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="TRANG CHỦ"
            source={require('../../../assets/icons/home.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="DANH MỤC"
            source={require('../../../assets/icons/category.png')}
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="TÌM KIẾM"
            source={require('../../../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="GIỎ HÀNG"
            source={require('../../../assets/icons/shopping-cart.png')}
            onPress={() => {
              navigation.navigate('Order');
              navigation.closeDrawer();
            }}
          />
           <MenuButton
            title="CÁ NHÂN"
            source={require('../../../assets/icons/user.png')}
            onPress={() => {
              navigation.navigate('User');
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
