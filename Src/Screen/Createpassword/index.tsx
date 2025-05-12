import { View, Text, Image } from 'react-native'
import React, { useRef } from 'react'
import Textinput from '../../Commponent/Common/Textinput'
import Buttons from '../../Commponent/Common/Buttons'
import Header from '../../Commponent/Common/Header'
import RBSheets from '../RBsheets'

export default function Createpassword(props:any) {
    const{navigation}=props
    const sheet=useRef();
  return (
    <View style={{flex:1}}>
 <View>
        <Image
          source={require('../../Assits/Icon/Group.png')}
          style={{width: 40, height: 40, marginLeft: 10, marginTop:"10%"}}></Image>
      </View>
      <Text style={{fontSize:30,marginTop:"10%",marginLeft:"5%",fontWeight:"800"}}>

Create New Password
</Text>                 
      <Text style={{marginTop:20,marginLeft:"5%",fontSize:14,fontWeight:"500"}}>
      Your new password must be different 
      from previously used password      </Text>
      <Textinput title={"Password"}/>
      <Textinput title={"Confirm Password"} />
      <Buttons title={"Continoue"} 
      onpressnext={()=>sheet.current.open()}/>

      <RBSheets
      
      ison={sheet}
      isof={() =>{ sheet.current.close(),navigation.navigate("Drawers")}}/>



    </View>
  )
}