import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Screen/Home';
import Searchscreen from '../../Screen/Searchscreen';
import Shopping from '../../Screen/Shopping';
import Contact from '../../Screen/Contact';
import {Image, ImageBase} from 'react-native';

const Tab = createBottomTabNavigator();

export function BottomBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // Hides tab labels
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../Assits/Images/Home.png')}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? 'black' : 'grey', // Fixes the typo
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Searchscreen"
        component={Searchscreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../Assits/Images/Searching.png')}
              style={{
                width: 17,
                height: 19,
                tintColor: focused ? 'black' : 'grey', // Fixes the typo
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={Shopping}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../Assits/Images/Shopping.png')}
              style={{
                width: 17,
                height: 19,
                tintColor: focused ? 'black' : 'grey', // Fixes the typo
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../Assits/Images/Profile.png')}
              style={{
                width: 17,
                height: 19,
                tintColor: focused ? 'black' : 'grey', // Fixes the typo
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
