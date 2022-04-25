import React from 'react';
import {LogBox} from 'react-native';
import * as Sentry from '@sentry/react-native';
import Config from 'react-native-config';
import {Navigation, routingInstrumentation} from './screens/navigation';

LogBox.ignoreAllLogs();

Sentry.init({
  dsn: Config.DSN,
  release: '1',
  dist: 'v1',
  environment: 'development',
  tracesSampler: (): number => 1,
  integrations: [
    new Sentry.ReactNativeTracing({
      routingInstrumentation,
    }),
  ],
});

const App = () => {
  return <Navigation />;
};

export default App;
