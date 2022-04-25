import * as React from 'react';
import {Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Button
        title={'Next screen'}
        onPress={() => navigation.navigate('Screen1')}
      />
    </View>
  );
};
