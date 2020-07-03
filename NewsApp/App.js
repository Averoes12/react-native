/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Alert,
  Modal,
  ToastAndroid,
} from 'react-native';
import ListItem from './pages/Article';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import {Icon} from 'react-native-elements';
import {Provider} from 'react-redux';
import store from './store';

const Stack = createStackNavigator();

export function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            width: 300,
            height: 400,
            padding: 20,

            justifyContent: 'center',
          }}>
          <TextInput
            style={{
              height: 40,
              borderWidth: 0.5,
              marginBottom: 8,
              borderRadius: 10,
            }}
            placeholder="Email address"
            textContentType="emailAddress"
            value={email}
            onChangeText={email => setEmail(email)}
          />
          <TextInput
            style={{
              height: 40,
              borderWidth: 0.5,
              marginBottom: 8,
              borderRadius: 10,
            }}
            placeholder="Password"
            textContentType="password"
            value={pass}
            onChangeText={pass => setPass(pass)}
          />
          <Button
            title="Login"
            onPress={() => {
              navigation.replace('Home');
            }}
          />
        </View>
      </View>
    </View>
  );
}
export function ActionBarIcon() {
  return (
    <Button
      title="sign-in"
      // type="font-awesome"
      // iconStyle={{margin: 10}}
      onPress={() => {
        this.props.navigation.push('Login');
      }}
    />
  );
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerTitle: 'Home',
                headerRight: () => <ActionBarIcon />,
              }}
            />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
