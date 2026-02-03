import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/app/Navigator';
import { name as appName } from './app.json';

function Root() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Root);

