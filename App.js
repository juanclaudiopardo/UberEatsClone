import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RestaurantItem from './src/components/restaurantItem/RestaurantItem';
import restaurant from './assets/data/restaurants.json';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <RestaurantItem restaurant={restaurant[0]} />
      <RestaurantItem restaurant={restaurant[1]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
