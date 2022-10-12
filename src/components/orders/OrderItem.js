import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const OrderItem = ({ order }) => {
  return (
    <View style={styles.row}>
      <Image
        source={{
          uri: order.Restaurant.image,
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{order.Restaurant.name}</Text>
        <Text style={styles.item}>item &#8226; $38,45</Text>
        <Text style={styles.status}>2 days ago {order.status}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: { flexDirection: 'row', marginVertical: 10, alignItems: 'center' },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  name: { fontSize: 20, fontWeight: 'bold' },
  item: { color: '#696969', fontSize: 15, marginTop: 5 },
  status: { color: '#696969', fontSize: 18 },
  separator: { backgroundColor: 'lightgrey', height: 1, marginVertical: 10 },
});

export default OrderItem;
