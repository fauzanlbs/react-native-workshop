import React from 'react';
import { View } from 'react-native';
import {
  createBottomTabNavigator,
  TabBarBottom,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
// import { Ionicons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import Tab1Screen from './Tabs/Tab1Screen';
import Tab1Details from './Tabs/Tab1Details';
import Tab2Screen from './Tabs/Tab2Screen';
import CustomHeader from '../../components/CustomHeader';
// import HeaderStyles from '../../headerStyles';

let headerDefaultNavigationConfig = {
  header: props => <CustomHeader {...props} />
  
};

const Rocket = createStackNavigator(
  {
    Tab1: {
      screen: Tab1Screen,
      navigationOptions: {
        headerLeft: null,
        headerTitle: 'Mission List',
      },
    },
    Tab1Details: {
      screen: Tab1Details,
      navigationOptions: {
        headerTitle: 'Mission Detail',
      },
    },
  },
  {
    navigationOptions: {
      ...headerDefaultNavigationConfig,
    },
  }
);

const Tab2 = createStackNavigator(
  {
    Tab2: {
      screen: Tab2Screen,
      navigationOptions: {
        headerLeft: null,
        headerTitle: 'Profile',
      },
    },
  },
  {
    navigationOptions: {
      ...headerDefaultNavigationConfig,
    },
  }
);



const DashboardTabRoutes = createBottomTabNavigator(
  {
    Mission: Rocket,
    Profile: Tab2,
  },
    {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled:false,
    tabBarOptions: {
      style:{
        borderTopColor:'#ddd',
        borderTopWidth:1,
        elevation:10,
      },
      bottomNavigationOptions: {
        labelColor: '#555',
        activeLabelColor: 'purple',
        rippleColor: '#555',
        shifting:false, 
        tabs: {
          //to styling every single tab
          Mission: {
            activeIcon: <Icon size={24} color='purple' name="ios-planet" />,
          },
          Profile: {
            activeIcon: <Icon size={24} color='purple' name="ios-person" />            
          }
        }
      }
    }
  });



export default createAppContainer(DashboardTabRoutes);
