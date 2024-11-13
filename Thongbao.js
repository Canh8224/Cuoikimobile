import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const orderNotifications = [
  {
    id: '001',
    message: 'Đơn Hàng 001 Đã Được Giao\nBạn chia sẻ cảm nhận của mình về nó nhé',
    image: require('../Appquanao/Image/Aophongden.png'),
  },
  {
    id: '002',
    message: 'Đơn Hàng 002 Đã Được Giao\nBạn chia sẻ cảm nhận của mình về nó nhé',
    image: require('../Appquanao/Image/Aophongden.png'),
  },
  // Bạn có thể thêm nhiều thông báo hơn tại đây
];

export default function NotificationScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.notificationCard} onPress={() => console.log('Đi đến chi tiết đơn hàng', item.id)}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.messageText}>
          Đơn Hàng <Text style={styles.orderId}>{item.id}</Text> Đã Được Giao{'\n'}
          {item.message}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#888" style={styles.chevronIcon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông Báo Đơn Hàng</Text>
      <FlatList
        data={orderNotifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingHorizontal: 15,
    color: '#333',
  },
  listContent: {
    paddingHorizontal: 15,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  orderId: {
    color: 'red',
    fontWeight: 'bold',
  },
  chevronIcon: {
    marginLeft: 'auto',
  },
});
