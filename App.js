import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from './Logo';
import Dangnhap from './Dangnhap';
import Dangky from './Dangky';
import MainTabs from './MainTabs';
import Sanpham from './Sanpham';
import Lichsu from './Lichsu';
import Giohang from './Giohang';
import Checkout from './Checkout';
import Editapp from './Editapp';
import Thanhtoan from './Thanhtoan';
import Loc from './Loc';
import Nam from './Nam';
import Nu from './Nu';
import Somi from './Somi';
import Aophong from './Aophong';
import AoHoddie from './AoHoddie';
import Aophongden from './Aophongden';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Logo}
          options={{ headerShown: false }}  // Ẩn tiêu đề nếu muốn
        />
        <Stack.Screen name="Dangnhap" component={Dangnhap} />
        <Stack.Screen name="Dangky" component={Dangky} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Sanpham" component={Sanpham} />
        <Stack.Screen name="Lichsu" component={Lichsu} />
        <Stack.Screen name="Giohang" component={Giohang} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Editapp" component={Editapp} />
        <Stack.Screen name="Thanhtoan" component={Thanhtoan} />
        <Stack.Screen name="Loc" component={Loc} />
        <Stack.Screen name="Nam" component={Nam} />
        <Stack.Screen name="Nu" component={Nu} />
        <Stack.Screen name="Somi" component={Somi} />
        <Stack.Screen name="Aophong" component={Aophong} />
        <Stack.Screen name="AoHoddie" component={AoHoddie} />
        <Stack.Screen name="Aophongden" component={Aophongden} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}