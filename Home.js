import React from 'react';
import { View, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: '1', image: require('../Appquanao/Image/e.png'), screen: 'Aophong' },
  { id: '2', image: require('../Appquanao/Image/f.png'), screen: 'AoHoddie' },
  { id: '3', image: require('../Appquanao/Image/g.png'), screen: 'Nu' },
  { id: '4', image: require('../Appquanao/Image/h.png'), screen: 'Nam' },
];

export default function ProductScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Ảnh Banner */}
      <Image source={require('../Appquanao/Image/d.png')} style={styles.bannerImage} />

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
      onPress={() => navigation.navigate(product.screen)}
    >
      <Image source={product.image} style={styles.productImage} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  bannerImage: {
    width: '100%',
    height: 200, // Bạn có thể điều chỉnh chiều cao tùy ý
    resizeMode: 'cover',
    marginBottom: 10,
  },
  productList: {
    paddingHorizontal: 0, // Loại bỏ khoảng trắng ngang
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productImage: {
    width: '100%', // Sử dụng toàn bộ chiều rộng của `productContainer`
    height: 150, // Điều chỉnh chiều cao tùy ý
    resizeMode: 'cover',
  },
});
