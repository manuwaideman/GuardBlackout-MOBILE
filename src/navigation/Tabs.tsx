import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Overview from '../screens/Overview';
import Location from '../screens/Location';
import Duration from '../screens/Duration';
import Losses from '../screens/Losses';
import Tips from '../screens/Tips';

export type TabParamList = {
  Panorama: undefined;
  Local: undefined;
  Duracao: undefined;
  Prejuizos: undefined;
  Dicas: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Panorama" component={Overview} />
      <Tab.Screen name="Local" component={Location} />
      <Tab.Screen name="Duracao" component={Duration} />
      <Tab.Screen name="Prejuizos" component={Losses} />
      <Tab.Screen name="Dicas" component={Tips} />
    </Tab.Navigator>
  );
}
