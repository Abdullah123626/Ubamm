import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Textinput from '../../Commponent/Common/Textinput';
import Buttons from '../../Commponent/Common/Buttons';

export default function                                                  (props:any) {
  const{navigation}=props
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 30, marginTop: '15%', marginLeft: 20}}>
        Log into
      </Text>
      <Text style={{fontSize: 30, marginTop: 19, marginLeft: 20}}>
        your account
      </Text>
      <Textinput title={'Email address'} />
      <Textinput title={'Password'} />
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            alignSelf: 'flex-end',
            marginRight: 20,
            marginTop: 10,
          }}>
          Forget Password?
        </Text>
      </TouchableOpacity>
      <Buttons title={'Log In'}
      onpressnext={()=>navigation.navigate("Forget")} />
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '70%',
        }}>
        <Text>
          Don't have an account?
          <TouchableOpacity>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}
