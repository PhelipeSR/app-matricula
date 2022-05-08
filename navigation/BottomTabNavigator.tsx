import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from 'react-native-paper';

import TabRegistrationScreen from '../screens/TabRegistrationScreen';
import TabHistoricScreen from '../screens/TabHistoricScreen';
import TabOfferListScreen from '../screens/TabOfferListScreen';
import TabProfileScreen from '../screens/TabProfileScreen';
import { RootTabParamList, RootTabScreenProps, TabBarIconProps } from '../types';


const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const { colors } = useTheme();

  return (
    <BottomTab.Navigator initialRouteName="TabRegistration">
      <BottomTab.Screen
        name="TabRegistration"
        component={TabRegistrationScreen}
        options={({ navigation }: RootTabScreenProps<'TabRegistration'>) => ({
          title: 'Matrícula',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabOfferList"
        component={TabOfferListScreen}
        options={{
          title: 'Oferta',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabHistoric"
        component={TabHistoricScreen}
        options={{
          title: 'Histórico',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabProfile"
        component={TabProfileScreen}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: TabBarIconProps) {
  return <Ionicons {...props} style={{ marginBottom: -3 }} size={30} />
}