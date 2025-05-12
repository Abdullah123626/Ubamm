import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {BottomBar} from '../../Navigation/BottomBar';
import Contact from '../Contact';
import Forget from '../Forget';
import Searchscreen from '../Searchscreen';
import Setting from '../Setting';



const data= ()=>{



  
}



const CustomDrawer = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'white'}}>
        <View style={{padding: 20, flexDirection: 'row'}}>
          <Image
            source={require('../../Assits/Images/Hairgirl.png')}
            style={{width: 60, height: 60, borderRadius: 40, marginBottom: 10}}
          />
          <View style={{marginLeft: '3%', marginTop: '5%'}}>
            <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>
              John Doe
            </Text>
            <Text style={{color: 'black', fontSize: 12}}>
              john.doe@example.com
            </Text>
          </View>

        </View>
        <Text>text</Text>

        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: 'white'}}>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 16, marginLeft: 10, color: 'red'}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Drawer = createDrawerNavigator();

export default function Drawers() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {backgroundColor: '#6200ea'},
        headerTintColor: '#fff',
        drawerActiveBackgroundColor: '#FFFF',
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {fontSize: 16},
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Home"
        component={BottomBar}
        options={{
          drawerIcon: ({color}) => (
            <Image
              source={require('../../Assits/Images/Home.png')}
              style={{width: 20, height: 30, resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerIcon: ({color}) => (
            <Image
              source={require('../../Assits/Icon/blackcircle.png')}
              style={{width: 20, height: 30, resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Forget"
        component={Forget}
        options={{
          drawerIcon: ({color}) => (
            <Image
              source={require('../../Assits/Icon/camera.png')}
              style={{width: 20, height: 30, resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Searchscreen"
        component={Searchscreen}
        options={{
          drawerIcon: ({color}) => (
            <Image
              source={require('../../Assits/Images/Searching.png')}
              style={{width: 20, height: 30, resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({color}) => (
            <Image
              source={require('../../Assits/Icon/circlee.png')}
              style={{width: 20, height: 30, resizeMode: 'contain'}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
