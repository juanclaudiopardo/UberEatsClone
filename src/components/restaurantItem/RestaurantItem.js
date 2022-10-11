import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subTitle}>
            $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minute
          </Text>
        </View>
        <View style={styles.rating}>
          <Text style={{ fontWeight: '600' }}>{restaurant.rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  title: { fontSize: 16, fontWeight: '500', marginVertical: 5 },
  subTitle: { color: 'grey' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    backgroundColor: 'lightgrey',
    marginLeft: 'auto',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default RestaurantItem;
