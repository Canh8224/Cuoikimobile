import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ViVoucher({ navigation }) { // Nhận navigation từ props
  const vouchers = [
    {
      id: '1',
      title: 'Mã Giảm 20k',
      date: '1/12 - 30/12',
      image: require('../Appquanao/Image/a.png'),
    },
    {
      id: '2',
      title: 'Mã Giảm 15k',
      date: '1/12 - 30/12',
      image: require('../Appquanao/Image/b.png'),
      description: 'Áp Dụng Cho Phí Vận Chuyển',
    },
  ];

  const renderVoucher = ({ item }) => (
    <View style={styles.voucherCard}>
      <Image source={item.image} style={styles.voucherImage} />
      <View style={styles.voucherDetails}>
        <Text style={styles.voucherTitle}>{item.title}</Text>
        <Text style={styles.voucherDate}>{item.date}</Text>
        {item.description && <Text style={styles.voucherDescription}>{item.description}</Text>}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Mã Giảm Giá</Text>
        <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Lichsu')}>
          <Ionicons name="time-outline" size={20} color="red" />
          <Text style={styles.historyText}>Lịch sử</Text>
        </TouchableOpacity>
      </View>

      {/* Search and Save Button */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Nhập Mã Giảm Giá" style={styles.searchInput} />
        <TouchableOpacity style={styles.saveButton}>
          <Ionicons name="add-outline" size={20} color="white" />
          <Text style={styles.saveButtonText}>Lưu</Text>
        </TouchableOpacity>
      </View>

      {/* Voucher List */}
      <FlatList
        data={vouchers}
        renderItem={renderVoucher}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.voucherList}
      />
    </View>
  );
}

// Styles như đã định
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyText: {
    color: 'red',
    marginLeft: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  saveButtonText: {
    color: 'white',
    marginLeft: 5,
  },
  voucherList: {
    paddingBottom: 20,
  },
  voucherCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
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
