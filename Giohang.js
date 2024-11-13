import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Giohang = ({ navigation }) => {
  // Dữ liệu giỏ hàng mẫu với ảnh từ URL khác nhau cho từng sản phẩm
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Áo Phông Đen', price: 150000, size: 'S', quantity: 1, image: 'https://example.com/images/aophongden1.png' },
    { id: '2', name: 'Quần Jean', price: 150000, size: 'S', quantity: 1, image: 'https://example.com/images/jean.png' },
    { id: '3', name: 'Áo Hoodie', price: 150000, size: 'S', quantity: 1, image: 'https://example.com/images/hoodie.png' },
  ]);

  // Tính tổng tiền
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Hàm để tăng số lượng sản phẩm
  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Hàm để giảm số lượng sản phẩm
  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Hàm để xóa sản phẩm khỏi giỏ hàng
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Render một sản phẩm trong giỏ hàng
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      {/* Sử dụng ảnh từ URL của từng sản phẩm */}
      <Image source={require('../Appquanao/Image/Aothunden.png')} style={styles.productImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCategory}>Áo Phông</Text>
        <Text style={styles.itemSize}>Kích cỡ: {item.size}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
            <Ionicons name="remove-circle-outline" size={24} color="#555" />
          </TouchableOpacity>
          <Text style={styles.itemQuantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
            <Ionicons name="add-circle-outline" size={24} color="#555" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.itemPrice}>{item.price.toLocaleString()}đ</Text>
      {/* Nút xóa sản phẩm */}
      <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.deleteIcon}>
        <Ionicons name="close-circle-outline" size={24} color="#555" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Giỏ Hàng Của Bạn</Text>
        <Text style={styles.cartCount}>{cartItems.length} Sản Phẩm</Text>
      </View>

      {/* Danh sách sản phẩm */}
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cartList}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Ionicons name="document-text-outline" size={24} color="#000" />
          <Text style={styles.totalText}>Tổng Cộng:</Text>
          <Text style={styles.totalPrice}>{total.toLocaleString()}đ</Text>
        </View>
        <TouchableOpacity
  style={styles.checkoutButton}
  onPress={() => navigation.navigate('Checkout', { cartItems })} // Truyền cartItems qua navigation
>
          <Text style={styles.checkoutText}>Mua Hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartCount: {
    fontSize: 16,
    color: '#555',
  },
  cartList: {
    paddingHorizontal: 15,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    position: 'relative',
  },
  productImage: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemCategory: {
    fontSize: 14,
    color: '#888',
  },
  itemSize: {
    fontSize: 14,
    color: '#888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#000',
    marginHorizontal: 10,
  },
  itemPrice: {
    fontSize: 16,
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  deleteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  footer: {
    padding: 15,
    backgroundColor: '#f1f1f1',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 16,
    marginLeft: 5,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  checkoutButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Giohang;
