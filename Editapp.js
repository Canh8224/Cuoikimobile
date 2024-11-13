import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const EditAddressScreen = ({ navigation }) => {
  // State cho các trường nhập liệu
  const [name, setName] = useState('Minh Hiếu Calantog');
  const [city, setCity] = useState('Bến Tre');
  const [district, setDistrict] = useState('Giồng Trôm');
  const [ward, setWard] = useState('Châu Hòa');
  const [phone, setPhone] = useState('0123456789');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Form chỉnh sửa địa chỉ */}
      <Text style={styles.label}>Tên:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Địa chỉ:</Text>

      <Text style={styles.subLabel}>Tỉnh/Thành Phố:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={city}
          onValueChange={(itemValue) => setCity(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Bến Tre" value="Bến Tre" />
          <Picker.Item label="Hồ Chí Minh" value="Hồ Chí Minh" />
          <Picker.Item label="Hà Nội" value="Hà Nội" />
          {/* Thêm các tùy chọn khác nếu cần */}
        </Picker>
      </View>

      <Text style={styles.subLabel}>Huyện/Quận:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={district}
          onValueChange={(itemValue) => setDistrict(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Giồng Trôm" value="Giồng Trôm" />
          <Picker.Item label="Chợ Lách" value="Chợ Lách" />
          <Picker.Item label="Ba Tri" value="Ba Tri" />
          {/* Thêm các tùy chọn khác nếu cần */}
        </Picker>
      </View>

      <Text style={styles.subLabel}>Xã/Phường:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={ward}
          onValueChange={(itemValue) => setWard(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Châu Hòa" value="Châu Hòa" />
          <Picker.Item label="Phước Mỹ Trung" value="Phước Mỹ Trung" />
          <Picker.Item label="Hưng Khánh Trung" value="Hưng Khánh Trung" />
          {/* Thêm các tùy chọn khác nếu cần */}
        </Picker>
      </View>

      <Text style={styles.label}>Số Điện Thoại:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
      />

      {/* Nút Sửa */}
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
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subLabel: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
  },
  picker: {
    height: 40,
    width: '100%',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default EditAddressScreen;
