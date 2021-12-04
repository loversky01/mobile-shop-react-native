import React from 'react';
import MenuImage from '../../components/MenuImage/MenuImage';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Payment from './ViewOrder/Payment';
import Cart from './ViewOrder/Cart';
import complete from './ViewOrder/complete';
import Location from './ViewOrder/location';
import EditLocal from './ViewOrder/EditLocal';

const Stack = createNativeStackNavigator();

export default class OrderScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Giỏ hàng',
    headerLeft: () => <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  });

  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Cart">
        <Stack.Screen
          name="Payment"
          component={Payment}
      
        />
    <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown:false}}
        />
<Stack.Screen
          name="complete"
          component={complete}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="location"
          component={Location}

        />
          <Stack.Screen
          name="EditLocal"
          component={EditLocal}
         
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}