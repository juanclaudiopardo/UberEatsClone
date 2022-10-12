import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import { AntDesign } from '@expo/vector-icons';
const dish = restaurants[0].dishes[0];
const DishDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity((currentValue) => currentValue - 1);
    }
  };

  const onPlus = () => {
    setQuantity((currentValue) => currentValue + 1);
  };

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <AntDesign
          name='minuscircleo'
          size={60}
          color='black'
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name='pluscircleo'
          size={60}
          color='black'
          onPress={onPlus}
        />
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnText}>
          Add {quantity} to basket &#8226; ${getTotal()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  title: { fontSize: 30, fontWeight: '600' },
  description: { color: '#696969' },
  separator: { backgroundColor: 'lightgrey', height: 1, marginVertical: 10 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  quantity: {
    fontSize: 25,
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
});
export default DishDetailsScreen;
