import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreens/HomeScreen';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='home' component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
