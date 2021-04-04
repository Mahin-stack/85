import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';
import ItemDisplayScreen from '../screens/ItemDisplayScreen';

export const AppStackNavigator = createStackNavigator({
  BookDonateList : {
    screen : ItemDisplayScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },

},
  {
    initialRouteName: 'BookDonateList'
  }
);
