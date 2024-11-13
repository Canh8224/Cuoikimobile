import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation(); // Lấy navigation từ useNavigation

  const handleCategoryPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.headerContainer}>
      {/* Icon tìm kiếm */}
      <TouchableOpacity style={styles.searchIconContainer}>
        <Ionicons name="search" size={24} color="#555" />
      </TouchableOpacity>

      {/* Icon giỏ hàng */}
      <TouchableOpacity 
        style={styles.cartIconContainer}
        onPress={() => navigation.navigate('Giohang')} // Điều hướng đến trang giỏ hàng
      >
        <Ionicons name="cart-outline" size={24} color="#555" />
      </TouchableOpacity>

      {/* Danh mục sản phẩm */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity onPress={() => handleCategoryPress('Sanpham')}>
          <Text style={[styles.category, styles.activeCategory]}>Tất Cả</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategoryPress('Nam')}>
          <Text style={styles.category}>Nam</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategoryPress('Nu')}>
          <Text style={styles.category}>Nữ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategoryPress('Somi')}>
          <Text style={styles.category}>Sơ Mi</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategoryPress('Aophong')}>
          <Text style={styles.category}>Áo Phông</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategoryPress('AoHoddie')}>
          <Text style={styles.category}>Áo Hoodie</Text>
        </TouchableOpacity>
      </View>

      {/* Icon lọc */}
      <TouchableOpacity style={styles.filterIconContainer}>
        <Ionicons name="filter" size={24} color="#555" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative',
  },
  searchIconContainer: {
    position: 'absolute',
    top: -30,
    right: 80,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  cartIconContainer: {
    position: 'absolute',
    top: -30,
    right: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  category: {
    fontSize: 14,
    color: '#555',
    marginHorizontal: 10,
  },
  activeCategory: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  filterIconContainer: {
    position: 'absolute',
    top: 40,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});
