import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomTab = createMaterialBottomTabNavigator();

import {DashboardModule} from '../../dashboard/dashboard.module';
import {SearchScreenModule} from '../../search/search.module';
import {SettingsModule} from '../../settings/settings.module';

export const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      barStyle={{
        backgroundColor: '#fff',
        elevation: 5,
        margin: 0,
        padding: 0,
      }}
      >
      <BottomTab.Screen
        name="dashboard"
        component={DashboardModule}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => <MaterialIcons name="dashboard" color={color} size={24} />,
        }}
      />
      <BottomTab.Screen
        name="search"
        component={SearchScreenModule}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => <MaterialIcons name="search" color={color} size={24} />,
        }}
      />

      <BottomTab.Screen
        name="settings"
        component={SettingsModule}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => <MaterialIcons name="unfold-more" color={color} size={24} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
