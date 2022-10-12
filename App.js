import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MyStack from './src/navigation/MyStack';

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
      <StatusBar style='light' />

      <MyStack />
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
