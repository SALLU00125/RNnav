
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
             <Stack.Screen
          name="Home"
         
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen name="Profile" />

      </Stack.Navigator>

    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
