import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Sentry from '@sentry/react-native';
import {Home} from './Home';
import {Screen1} from './Screen1';

const Stack = createNativeStackNavigator();

export const routingInstrumentation =
  new Sentry.ReactNavigationInstrumentation();

export const Navigation = () => {
  const navigationRef = React.useRef(null);

  const handleOnNavigationReady = React.useCallback(() => {
    routingInstrumentation.registerNavigationContainer(navigationRef);
  }, []);

  return (
    <NavigationContainer ref={navigationRef} onReady={handleOnNavigationReady}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Screen1" component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
