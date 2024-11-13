import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const Dangnhap = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image
          source={require('../Appquanao/Image/quay.png')} // Đường dẫn đến ảnh icon quay lại
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Đăng Nhập</Text>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => navigation.navigate('Dangky')}>
          <Text style={styles.signUp}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
      
      <Image source={require('../Appquanao/Image/Giohangto.png')} style={styles.cartIcon} />
      
      <View style={styles.inputContainer}>
        <Image source={require('../Appquanao/Image/Username.png')} style={styles.icon} />
        <TextInput
          placeholder="Tên Đăng Nhập"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../Appquanao/Image/lock.png')} style={styles.icon} />
        <TextInput
          placeholder="Mật Khẩu"
          style={styles.input}
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image
            source={require('../Appquanao/Image/eye.png')} // Icon hiển thị mật khẩu
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('MainTabs')}>
        <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Quên Mật Khẩu ?</Text>
      </TouchableOpacity>

      <Text style={styles.socialLoginText}>Đăng Nhập Bằng:</Text>
      <View style={styles.socialIcons}>
        <TouchableOpacity>
          <Image source={require('../Appquanao/Image/Fb.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../Appquanao/Image/gg.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
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
  backIcon: {
    width: 24,
    height: 24,
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
  signUp: {
    fontSize: 24,
    color: 'gray',
  },
  cartIcon: {
    width: 100,
    height: 100,
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
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  loginButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 10,
    textAlign: 'center',
    color: 'gray',
  },
  socialLoginText: {
    marginTop: 20,
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});

export default Dangnhap;
