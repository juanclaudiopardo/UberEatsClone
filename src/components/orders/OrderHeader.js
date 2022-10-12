import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import orders from '../../../assets/data/orders.json';
const order = orders[0];
const OrderHeader = () => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: order.Restaurant.image }} />
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.title}>{order.Restaurant.name}</Text>
        <Text style={styles.subTitle}>{order.status} &#8226; 2 days ago</Text>
        <Text style={styles.menuTitle}>Your orders</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: { width: '100%', aspectRatio: 5 / 3 },
  title: { fontSize: 35, fontWeight: '600', marginVertical: 5 },
  subTitle: { color: '#525252', fontSize: 15 },
  menuTitle: { marginTop: 20, fontSize: 18, fontWeight: 'bold' },
});
export default OrderHeader;
