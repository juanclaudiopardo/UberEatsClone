import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/homeScreens/HomeScreen';
import RestaurantDetailScreen from './src/screens/restaurantDetail/RestaurantDetailScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      {/* <HomeScreen /> */}
      <RestaurantDetailScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
