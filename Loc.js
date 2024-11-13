import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Checkbox, RadioButton, IconButton } from 'react-native-paper';

export default function FilterScreen({ navigation }) {
  const [brand, setBrand] = useState('Louis Vuitton');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [priceOrder, setPriceOrder] = useState('lowToHigh');
  const [ratings, setRatings] = useState([]);
  const [sizes, setSizes] = useState([]);

  const toggleRating = (rating) => {
    setRatings((prevRatings) =>
      prevRatings.includes(rating)
        ? prevRatings.filter((r) => r !== rating)
        : [...prevRatings, rating]
    );
  };

  const toggleSize = (size) => {
    setSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Bộ Lọc</Text>
        <IconButton icon="close" size={24} onPress={() => navigation.goBack()} />
      </View>

      {/* Thương Hiệu */}
      <Text style={styles.sectionTitle}>Thương Hiệu</Text>
      <View style={styles.brandContainer}>
        <TouchableOpacity onPress={() => setBrand('Louis Vuitton')} style={styles.brandItem}>
          <Text style={[styles.brandText, brand === 'Louis Vuitton' && styles.selectedText]}>Louis Vuitton</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setBrand('Chanel')} style={styles.brandItem}>
          <Text style={[styles.brandText, brand === 'Chanel' && styles.selectedText]}>Chanel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setBrand('Gucci')} style={styles.brandItem}>
          <Text style={[styles.brandText, brand === 'Gucci' && styles.selectedText]}>Gucci</Text>
        </TouchableOpacity>
      </View>

      {/* Giá Tiền */}
      <Text style={styles.sectionTitle}>Giá Tiền</Text>
      <View style={styles.priceContainer}>
        <TextInput
          placeholder="Tối Thiểu"
          style={styles.priceInput}
          value={priceFrom}
          onChangeText={setPriceFrom}
          keyboardType="numeric"
        />
        <Text style={styles.dash}> - </Text>
        <TextInput
          placeholder="Tối Đa"
          style={styles.priceInput}
          value={priceTo}
          onChangeText={setPriceTo}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.priceOrderContainer}>
        <RadioButton.Group onValueChange={value => setPriceOrder(value)} value={priceOrder}>
          <RadioButton.Item label="Từ Thấp Đến Cao" value="lowToHigh" />
          <RadioButton.Item label="Từ Cao Đến Thấp" value="highToLow" />
        </RadioButton.Group>
      </View>

      {/* Đánh Giá */}
      <Text style={styles.sectionTitle}>Đánh Giá</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <View key={rating} style={styles.ratingItem}>
            <Checkbox
              status={ratings.includes(rating) ? 'checked' : 'unchecked'}
              onPress={() => toggleRating(rating)}
            />
            <Text style={styles.ratingText}>{rating} Sao</Text>
          </View>
        ))}
      </View>

      {/* Kích Cỡ */}
      <Text style={styles.sectionTitle}>Kích Cỡ</Text>
      <View style={styles.sizeContainer}>
        {['S', 'M', 'X', 'XXL', 'XXXL'].map((size) => (
          <View key={size} style={styles.sizeItem}>
            <Checkbox
              status={sizes.includes(size) ? 'checked' : 'unchecked'}
              onPress={() => toggleSize(size)}
            />
            <Text style={styles.sizeText}>{size}</Text>
          </View>
        ))}
      </View>

      {/* Nút Áp Dụng */}
      <TouchableOpacity style={styles.applyButton} onPress={() => navigation.goBack()}>
        <Text style={styles.applyButtonText}>Áp Dụng</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  brandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  brandItem: {
    paddingHorizontal: 10,
  },
  brandText: {
    fontSize: 16,
    color: '#555',
  },
  selectedText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  priceInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  dash: {
    fontSize: 18,
    color: '#555',
  },
  priceOrderContainer: {
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  ratingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  sizeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  sizeText: {
    fontSize: 14,
    marginLeft: 5,
  },
  applyButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
