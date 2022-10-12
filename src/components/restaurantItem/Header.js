import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import React from 'react';

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: restaurant.image }} />
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subTitle}>
          $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minute
        </Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: { width: '100%', aspectRatio: 5 / 3 },
  title: { fontSize: 35, fontWeight: '600', marginVertical: 5 },
  subTitle: { color: '#525252', fontSize: 15 },
  menuTitle: { marginTop: 20, fontSize: 18 },
});
export default RestaurantHeader;
