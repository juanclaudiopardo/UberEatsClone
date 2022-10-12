import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import restaurants from '../../../assets/data/restaurants.json';
import OrderHeader from '../../components/orders/OrderHeader';
import BasketItem from '../../components/basketItem/BasketItem';

const OrderDetailScreen = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={OrderHeader}
        data={restaurants[0].dishes}
        renderItem={({ item }) => <BasketItem basketDish={item} />}
      />
    </View>
  );
};

export default OrderDetailScreen;
