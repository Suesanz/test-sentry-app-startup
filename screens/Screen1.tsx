import * as React from 'react';
import {Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import codePush from 'react-native-code-push';

export const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <View style={{margin: 5}}>
        <Button title={'Go back'} onPress={() => navigation.goBack()} />
      </View>
      <View style={{margin: 5}}>
        <Button title={'Restart app'} onPress={() => codePush.restartApp()} />
      </View>
    </View>
  );
};
