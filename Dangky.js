import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PhoneInput from 'react-native-phone-number-input'; // Nhập PhoneInput

const Dangky = ({ navigation }) => {
  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);

  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleRegister = () => {
    if (!isChecked) {
      Alert.alert('Lỗi', 'Vui lòng đồng ý với các điều khoản và điều kiện');
    } else {
      Alert.alert('Thành công', 'Đăng ký thành công');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Đăng Ký</Text>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => navigation.navigate('Dangnhap')}>
          <Text style={styles.signIn}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>

      <MaterialCommunityIcons name="account-circle" size={80} color="gray" style={styles.logo} />

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="account" size={24} color="gray" style={styles.icon} />
        <TextInput
          placeholder="Họ Tên"
          style={styles.input}
          value={fullname}
          onChangeText={setFullname}
        />
      </View>

      {/* Thêm thành phần PhoneInput */}
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="VN"
        layout="first"
        placeholder="Nhập số điện thoại"
        onChangeText={(text) => {
          setPhoneNumber(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        withShadow
        autoFocus={false}
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.phoneInputTextContainer}
      />

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="account" size={24} color="gray" style={styles.icon} />
        <TextInput
          placeholder="Tên Đăng Nhập"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="map-marker" size={24} color="gray" style={styles.icon} />
        <TextInput
          placeholder="Địa Chỉ"
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock" size={24} color="gray" style={styles.icon} />
        <TextInput
          placeholder="Mật Khẩu"
          style={styles.input}
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <MaterialCommunityIcons
            name={isPasswordVisible ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock" size={24} color="gray" style={styles.icon} />
        <TextInput
          placeholder="Nhập Lại Mật Khẩu"
          style={styles.input}
          secureTextEntry={!isConfirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
          <MaterialCommunityIcons
            name={isConfirmPasswordVisible ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setChecked(!isChecked)}>
          <MaterialCommunityIcons
            name={isChecked ? "checkbox-marked" : "checkbox-blank-outline"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Tôi đồng ý với các điều khoản và điều kiện</Text>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>ĐĂNG KÝ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
    height: 24,
    width: 1,
    backgroundColor: 'gray',
    marginHorizontal: 10,
  },
  signIn: {
    fontSize: 24,
    color: 'gray',
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  phoneInputContainer: {
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  phoneInputTextContainer: {
    backgroundColor: '#f0f0f0',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
    color: 'gray',
  },
  registerButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Dangky;
