import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const DishListItem = ({ dish }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>$ {dish.price}</Text>
      </View>
      {dish.image && (
        <Image style={styles.image} source={{ uri: dish.image }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingVertical: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  name: { fontSize: 16, fontWeight: 'bold', letterSpacing: 0.5 },
  description: { color: 'grey', marginVertical: 5 },
  price: { fontSize: 16 },
  image: { height: 75, aspectRatio: 1 },
});
export default DishListItem;
