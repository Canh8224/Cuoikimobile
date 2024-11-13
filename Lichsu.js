import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';

export default function LichSuScreen({ navigation }) {
  const [selectedId, setSelectedId] = useState(null); // State để lưu id của mục được chọn

  const vouchers = [
    {
      id: '1',
      title: 'Mã Giảm 20k',
      date: '1/12 - 30/12',
      image: require('../Appquanao/Image/a.png'),
    },
    {
      id: '2',
      title: 'Mã Giảm 20k',
      date: '1/12 - 30/12',
      image: require('../Appquanao/Image/a.png'),
    },
    {
      id: '3',
      title: 'Mã Giảm 20k',
      date: '1/12 - 30/12',
      image: require('../Appquanao/Image/a.png'),
    },
    {
      id: '4',
      title: 'Mã Giảm 15k',
      date: '1/12 - 30/12',
      image: require('../Appquanao/Image/b.png'),
      description: 'Áp Dụng Cho Phí Vận Chuyển',
    },
  ];

  const renderVoucher = ({ item }) => {
    const isSelected = item.id === selectedId; // Kiểm tra nếu mục này được chọn

    return (
      <TouchableOpacity
        style={[styles.voucherCard, isSelected && styles.voucherCardSelected]} // Thêm kiểu nổi bật nếu được chọn
        onPress={() => setSelectedId(item.id)} // Cập nhật id của mục được chọn khi nhấn
      >
        <Image source={item.image} style={styles.voucherImage} />
        <View style={styles.voucherDetails}>
          <Text style={styles.voucherTitle}>{item.title}</Text>
          <Text style={styles.voucherDate}>{item.date}</Text>
          {item.description && <Text style={styles.voucherDescription}>{item.description}</Text>}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Danh sách mã giảm giá */}
      <FlatList
        data={vouchers}
        renderItem={renderVoucher}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.voucherList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  voucherList: {
    paddingBottom: 20,
  },
  voucherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  voucherCardSelected: {
    backgroundColor: '#d1c4e9', // Màu nền nổi bật khi mục được chọn
    borderColor: '#7e57c2',
    borderWidth: 2,
  },
  voucherImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  voucherDetails: {
    flex: 1,
  },
  voucherTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  voucherDate: {
    color: '#888',
    marginVertical: 5,
  },
  voucherDescription: {
    color: '#888',
  },
});
