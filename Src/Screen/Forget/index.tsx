import {View, Text, Image} from 'react-native';
import React from 'react';
import Textinput from '../../Commponent/Common/Textinput';
import Buttons from '../../Commponent/Common/Buttons';

export default function Forget(props:any) {
    const{navigation}=props
  return (
    <View style={{flex: 1}}>
      <View>
        <Image
          source={require('../../Assits/Icon/Group.png')}
          style={{width: 40, height: 40, marginLeft: 10, marginTop:"10%"}}></Image>
      </View>
      <Text style={{fontSize:30,marginTop:"10%",marginLeft:"5%",fontWeight:"800"}}>

        Forget Password?
      </Text>
      <Text style={{marginTop:20,marginLeft:"5%",fontSize:14,fontWeight:"500"}}>
      Enter email associated with your account and we’ll send and email with intructions to reset your password
      </Text>
      <Textinput title={"Enter your email"}/>
      <Buttons title={"Next"}
      onpressnext={()=>navigation.navigate("Createpassword")}/>
    </View>
  );
}
