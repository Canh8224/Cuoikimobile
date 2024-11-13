import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Sanpham from './Sanpham';
import ViVoucher from './ViVoucher';
import Home from './Home';
import Thongbao from './Thongbao';
import Canhan from './Canhan';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Sanpham') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'ViVoucher') {
            iconName = focused ? 'ticket' : 'ticket-outline';
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Thongbao') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Canhan') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // Tùy chỉnh cho icon Home để nổi bật ở giữa
          if (route.name === 'Home') {
            return (
              <View style={{ 
                position: 'absolute', 
                bottom: 20, 
                backgroundColor: 'white', 
                borderRadius: 35, 
                padding: 10,
                shadowColor: '#000',
                shadowOpacity: 0.2,
                shadowRadius: 10,
                elevation: 5,
              }}>
                <Ionicons name={iconName} size={35} color={focused ? 'tomato' : 'gray'} />
              </View>
            );
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({ focused }) => {
          let label;

          if (route.name === 'Sanpham') {
            label = 'Sản phẩm';
          } else if (route.name === 'ViVoucher') {
            label = 'Ví Voucher';
          } else if (route.name === 'Home') {
            label = 'Home';
          } else if (route.name === 'Thongbao') {
            label = 'Thông báo';
          } else if (route.name === 'Canhan') {
            label = 'Cá nhân';
          }

          return <Text style={{ color: focused ? 'tomato' : 'gray', fontSize: 12 }}>{label}</Text>;
        },
        tabBarStyle: { 
          height: 70,
          backgroundColor: '#333', 
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen name="Sanpham" component={Sanpham} options={{ tabBarLabel: 'Sản phẩm' }} />
      <Tab.Screen name="ViVoucher" component={ViVoucher} options={{ tabBarLabel: 'Ví Voucher' }} />
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Thongbao" component={Thongbao} options={{ tabBarLabel: 'Thông báo' }} />
      <Tab.Screen name="Canhan" component={Canhan} options={{ tabBarLabel: 'Cá nhân' }} />
    </Tab.Navigator>
  );
}
