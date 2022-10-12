import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const BasketItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={{ fontWeight: 'bold' }}>{basketDish.name}</Text>
      <Text style={styles.price}>${basketDish.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  quantityContainer: {
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
  price: { marginLeft: 'auto' },
});

export default BasketItem;
