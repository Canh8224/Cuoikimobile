import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from './Header';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const products = [
  {
    id: '1',
    name: 'Áo Phông Đen',
    image: require('../Appquanao/Image/Aophongden.png'),
    rating: '★★★★★',
    reviews: '(500 Đánh Giá)',
    price: '150.000đ',
    screen: 'Aophongden', // Màn hình đích
  },
  {
    id: '2',
    name: 'Áo Thun Đen',
    image: require('../Appquanao/Image/Aothunden.png'),
    rating: '★★★★★',
    reviews: '(500 Đánh Giá)',
    price: '150.000đ',
    screen: 'Aothunden', // Màn hình đích
  },
  {
    id: '3',
    name: 'Áo Hoodie Đen',
    image: require('../Appquanao/Image/Hoddi.png'),
    rating: '★★★★★',
    reviews: '(500 Đánh Giá)',
    price: '150.000đ',
    screen: 'AoHoodie', // Màn hình đích
  },
];

export default function ProductScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      
      {/* Nút Lọc với Icon */}
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Loc')}>
          <Ionicons name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

function ProductItem({ product, navigation }) {
  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => navigation.navigate(product.screen)} // Điều hướng đến trang tương ứng
    >
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productRating}>{product.rating} {product.reviews}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  productList: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  productContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  productRating: {
    color: '#888',
  },
  productPrice: {
    color: '#000',
    fontWeight: 'bold',
  },
});
