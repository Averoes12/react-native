import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import LatestNotification from './pages/LatestNotification'
import AllNotification from './pages/AllNotification'

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button
        title="Back"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Home"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function BottomBarNavigation(){
  return(
    <BottomNavigation.Navigator
    >
        <BottomNavigation.Screen name="First"
        >
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
              />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </BottomNavigation.Screen>
        <BottomNavigation.Screen name="Second">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </BottomNavigation.Screen>
      </BottomNavigation.Navigator>
  )
}

function Tabs() {
  return (
    <Tab.Navigator
    initialRouteName='Latest'
    >
      <Tab.Screen name="Latest" component={LatestNotification} />
      <Tab.Screen name="All" component={AllNotification} />
    </Tab.Navigator>
  );
}

const BottomNavigation = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={BottomBarNavigation} />
        <Drawer.Screen name="Notifications" component={Tabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

