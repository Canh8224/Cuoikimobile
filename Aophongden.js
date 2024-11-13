import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProductDetailScreen({ navigation }) {
  const product = {
    id: '1',
    name: 'Áo Phông Đen',
    price: '150.000đ',
    image: require('../Appquanao/Image/Aophongden.png'),
  };

  const handleAddToCart = () => {
    // Hiển thị thông báo và điều hướng đến giỏ hàng sau khi nhấn OK
    Alert.alert(
      'Thông báo',
      'Sản phẩm đã được thêm vào giỏ hàng.',
      [
        { text: 'OK', onPress: () => navigation.navigate('Giohang') } // Điều hướng đến màn hình giỏ hàng
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.priceLabel}>Giá</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.productRating}>★★★★★</Text>
          <Text style={styles.reviewCount}>(500 Đánh Giá)</Text>
        </View>
        <TouchableOpacity style={styles.sizePicker}>
          <Text style={styles.sizePickerText}>Chọn Kích Cỡ</Text>
        </TouchableOpacity>
        <Text style={styles.description}>
          Áo Phông Trắng Basic Trơn Unisex Form Rộng Vải Dày Không Xù Lông Cổ Tròn.
          - Chất liệu: 100% cotton, co giãn 2 chiều, vải mềm, thoáng mát.
          - Thiết kế hiện đại, dễ phối đồ.
        </Text>
        {/* Nút Thêm Vào Giỏ Hàng */}
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>Thêm Vào Giỏ Hàng</Text>
          <Ionicons name="cart" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    backgroundColor: '#e9e9e9',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    marginTop: -20,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceLabel: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  productRating: {
    fontSize: 16,
    color: '#ffcc00',
  },
  reviewCount: {
    fontSize: 14,
    color: '#888',
    marginLeft: 10,
  },
  sizePicker: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  sizePickerText: {
    fontSize: 16,
    color: '#555',
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    marginBottom: 20,
  },
  addToCartButton: {
    flexDirection: 'row',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
