import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const CheckoutScreen = ({ navigation, route }) => {
  // Nhận dữ liệu giỏ hàng từ route params
  const { cartItems } = route.params;

  // Tính tổng tiền
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = 30000; // Phí vận chuyển cố định (nếu có)
  const discount = 15000; // Giảm giá cố định (nếu có)
  const finalTotal = totalAmount + shippingFee - discount;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity >
        <Text style={styles.headerTitle}>Thông Tin Thanh Toán</Text>
      </View>

      {/* Thông tin khách hàng */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Minh Hiếu Calantog</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Editapp')}>
            <Ionicons name="create-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionText}>Châu Hòa, Giồng Trôm, Bến Tre, Việt Nam</Text>
      </View>

      {/* Phương thức thanh toán */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Hình Thức Thanh Toán</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Thanhtoan')}>
            <Ionicons name="create-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionText}>Credit card</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.sectionText}>**** **** **** 5707</Text>
          <MaterialIcons name="credit-card" size={24} color="#FF5F00" style={styles.cardIcon} />
        </View>
      </View>

      {/* Mã giảm giá */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Áp Dụng Mã Giảm Giá:</Text>
          <TouchableOpacity style={styles.discountLink}>
            <Text style={styles.discountText}>Miễn Phí Vận Chuyển</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tổng kết */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Tổng Số Lượng Sản Phẩm: {totalItems}</Text>
        <Text style={styles.summaryText}>Tổng Tiền Hàng: {totalAmount.toLocaleString()}đ</Text>
        <Text style={styles.summaryText}>Tổng Tiền Phí Vận Chuyển: {shippingFee.toLocaleString()}đ</Text>
        <Text style={styles.summaryText}>Tổng Tiền Được Giảm Giá: {discount.toLocaleString()}đ</Text>
      </View>

      {/* Tổng tiền */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Tổng Tiền: {finalTotal.toLocaleString()}đ</Text>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmText}>Xác Nhận</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionText: {
    fontSize: 14,
    color: '#555',
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  cardIcon: {
    marginLeft: 10,
  },
  discountLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountText: {
    fontSize: 14,
    color: '#FF5F00',
    fontWeight: 'bold',
    marginRight: 5,
  },
  summary: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  summaryText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#f1f1f1',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    borderRadius: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  confirmButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
