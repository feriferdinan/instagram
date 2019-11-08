import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import { MainFeed, Login, Profile, Register, Explore, Notification, AddPost } from "./components/screens"
import { createSwitchNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFeather from 'react-native-vector-icons/Feather'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'

const Tabs = createBottomTabNavigator({
  feed: {
    screen: MainFeed,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        focused ? <IconMci name="home" size={28} /> : <IconMci name="home-outline" size={26} />
      ),
      showLabel: false
    }
  },
  explore: {
    screen: Explore,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        focused ? <IconFeather name="search" size={26} /> : <IconAnt name="search1" size={25} />
      ),
    }
  },
  addpost: {
    screen: AddPost,
    navigationOptions: {
      tabBarIcon: ({ }) => (
        <IconFeather name="plus-square" size={25} />
      ),
    }
  },
  notification: {
    screen: Notification,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        focused ? <IconAnt name="heart" size={25} color="black" /> : <IconAnt name="hearto" size={25} />
      ),
    }
  },
  profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        focused ? <IconFA5 name="user-alt" size={19.5} /> : <IconFeather name="user" size={25} />
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
        borderTopWidth: StyleSheet.hairlineWidth
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
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <AppContainer />
  }
}

export default Instagram