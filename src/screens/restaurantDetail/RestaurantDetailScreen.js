import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../../components/dishItem/DishListItem';
import RestaurantHeader from '../../components/restaurantItem/Header';
const restaurant = restaurants[0];

const RestaurantDetailScreen = () => {
  return (
    <View>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
      />
      <View style={styles.iconContainer}>
        <Ionicons name='arrow-back-circle' size={45} color='white' />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 15,
  },
});
export default RestaurantDetailScreen;
