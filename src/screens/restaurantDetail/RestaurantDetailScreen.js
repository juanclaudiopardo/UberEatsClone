import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import { Ionicons } from '@expo/vector-icons';
const restaurant = restaurants[0];

const RestaurantDetailScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: restaurant.image }} />
      <View style={styles.iconContainer}>
        <Ionicons name='arrow-back-circle' size={45} color='white' />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subTitle}>
          $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minute
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: { width: '100%', aspectRatio: 5 / 3 },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 15,
  },
  title: { fontSize: 35, fontWeight: '600', marginVertical: 5 },
  subTitle: { color: 'grey', fontSize: 15 },
});
export default RestaurantDetailScreen;
