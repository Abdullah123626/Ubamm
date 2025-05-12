import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../../Screen/Welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateScreen from '../../Screen/CreateScreen';
import Login from '../../Screen/Login';
import Forget from '../../Screen/Forget';
import Createpassword from '../../Screen/Createpassword';
import { BottomBar } from '../BottomBar';
import Whishlistscreen from '../../Screen/Whishlistscreen';
import Setting from '../../Screen/Setting';
import Payment from '../../Screen/Payment';
import Newcard from '../../Screen/Newcard';
import Voucher from '../../Screen/Voucher';
import Adress from '../../Screen/Adress';
import Feedback from '../../Screen/Feedback';
import Drawers from '../../Screen/Drawers';
import Dresses from '../../Screen/Dresses';
import Sportwear from '../../Screen/Sportwear';
import onBordingscreen from '../../Screen/onBordingscreen';
const Stack = createNativeStackNavigator();


export default function MainStake() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Createpassword" component={Createpassword} />
        <Stack.Screen name="Drawers" component={Drawers} />
        <Stack.Screen name="Whishlistscreen" component={Whishlistscreen} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Newcard" component={Newcard} />
        <Stack.Screen name="Voucher" component={Voucher} />
        <Stack.Screen name="Adress" component={Adress} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Dresses" component={Dresses} />
        <Stack.Screen name="Sportwear" component={Sportwear} />
        <Stack.Screen name="onBordingscreen" component={onBordingscreen} />                           
 


        




                                                                          





        





      </Stack.Navigator>
    </NavigationContainer>
  );
}
