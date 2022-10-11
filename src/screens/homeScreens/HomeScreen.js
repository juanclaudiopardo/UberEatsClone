import { View, FlatList } from 'react-native';
import React from 'react';
import restaurant from '../../../assets/data/restaurants.json';
import RestaurantItem from '../../components/restaurantItem/RestaurantItem';

const HomeScreen = () => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <FlatList
        data={restaurant}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
