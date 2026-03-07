

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
enableScreens();
// ⭐ 여기 중요
import BrowserScreen from './src/features/safeBrowser/BrowserScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Home 대신 BrowserScreen을 첫 화면으로 */}
        <Stack.Screen
          name="Browser"
          component={BrowserScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}