import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { MainFeed, Login, Camera, Profile, Register, Explore, Notification } from "./components/screens"
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFeather from 'react-native-vector-icons/Feather'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'

const Tabs = createBottomTabNavigator({
  feed: {
    screen: MainFeed,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        focused ? <IconMci name="home" size={35} /> : <IconMci name="home-outline" size={33} />
      ),
      showLabel: false
    }
  },
  explore: {
    screen: Explore,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        focused ? <IconFeather name="search" size={31} iconStyle={{ fontWeight: 'bold', }} /> : <IconAnt name="search1" size={30} />
      ),
    }
  },
  camera: {
    screen: Camera,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <IconFeather name="plus-square" size={30} />
      ),
    }
  },
  notification: {
    screen: Notification,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        focused ? <IconAnt name="heart" size={30} color="black" /> : <IconAnt name="hearto" size={30} />
      ),
    }
  },
  profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        focused ? <IconFA5 name="user-alt" size={24.5} /> : <IconFeather name="user" size={30} />
      ),
    }
  }
},
  {

    tabBarPosition: 'bottom',

    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      renderIndicator: () => null,
      style: {
        backgroundColor: 'white',
        elevation: 0,
        borderTopColor: '#c6c7cc',
        borderTopWidth: 1
      }
    }
  }
)

const IntroStack = createStackNavigator({
  login: Login,
  register: Register
})

const MainStack = createSwitchNavigator({
  main: { screen: Tabs },
  intro: { screen: IntroStack },
});

const AppContainer = createAppContainer(MainStack);



class Instagram extends Component {
  render() {
    return <AppContainer />
  }
}

export default Instagram