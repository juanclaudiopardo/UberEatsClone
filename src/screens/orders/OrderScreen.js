import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';
import orders from '../../../assets/data/orders.json';
import OrderItem from '../../components/orders/OrderItem';
const YourOrders = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your orders</Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderItem order={item} />}
      />

      <View style={styles.separator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 60, paddingHorizontal: 10 },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: { flexDirection: 'row' },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  name: { fontSize: 20, fontWeight: 'bold' },
  separator: { backgroundColor: 'lightgrey', height: 1, marginVertical: 10 },
});
export default YourOrders;
