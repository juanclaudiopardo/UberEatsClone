import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import BasketItem from '../../components/basketItem/BasketItem';
const restaurant = restaurants[0];

const BasketScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.yourItem}>Your items</Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketItem basketDish={item} />}
      />
      <View style={styles.separator} />
      <View style={styles.btn}>
        <Text style={styles.btnText}>Create order</Text>
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
  yourItem: { fontSize: 19, fontWeight: '600', marginTop: 20 },

  description: { color: '#696969' },
  separator: { backgroundColor: 'lightgrey', height: 1, marginVertical: 10 },

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
export default BasketScreen;
