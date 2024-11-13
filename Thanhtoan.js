import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const CheckoutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Payment Options */}
      <View style={styles.paymentOptions}>
        <Image source={require('../Appquanao/Image/image 5.png')} style={[styles.paymentIcon, { width: 70, height: 20 }]} />
        <Image source={require('../Appquanao/Image/image 6.png')} style={styles.paymentIcon} />
        <Image source={require('../Appquanao/Image/image 7.png')} style={styles.paymentIcon} />
      </View>

      {/* Card Details */}
      <View style={styles.cardSection}>
        <View style={styles.cardFront}>
          <Text style={styles.cardText}>Số Thẻ: **** **** **** 5707</Text>
          <Text style={styles.cardHolder}>Tên Chủ Thẻ: MINH HIẾU CALANTOG</Text>
          <Text style={styles.expiryDate}>Hạn Sử Dụng: 12/2026</Text>
        </View>
        <View style={styles.cardBack}>
          <Text style={styles.cvv}>CVV: 123</Text>
        </View>
      </View>

      {/* Save Card Option */}
      <View style={styles.saveCard}>
        <Ionicons name="checkbox-outline" size={20} color="#000" />
        <Text style={styles.saveCardText}>Lưu Chi Tiết Thẻ</Text>
      </View>

      {/* Edit Button */}
      <TouchableOpacity style={styles.editButton}>
        <Ionicons name="create-outline" size={20} color="#fff" />
        <Text style={styles.editButtonText}>Sửa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  paymentIcon: {
    width: 60,
    height: 40,
  },
  cardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardFront: {
    backgroundColor: '#eaeaea',
    padding: 15,
    borderRadius: 10,
    width: '45%',
  },
  cardBack: {
    backgroundColor: '#eaeaea',
    padding: 15,
    borderRadius: 10,
    width: '45%',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardHolder: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  expiryDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  cvv: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
  saveCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  saveCardText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Cách đều các icon
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default CheckoutScreen;
