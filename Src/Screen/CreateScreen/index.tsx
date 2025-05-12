import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Textinput from '../../Commponent/Common/Textinput'
import Buttons from '../../Commponent/Common/Buttons'

export default function CreateScreen(props:any) {
  const{navigation}=props
  
  return (                                                                          
    <View style={{flex:1}}>
      <Text style={{fontSize:30,marginTop:"15%",marginLeft:20}}>Create</Text>
      <Text style={{fontSize:30,marginTop:19,marginLeft:20}}>
        Your account
      </Text>
      <Textinput title={"Enter your name"}/>
      <Textinput title={"Email Adrees"}/>
      <Textinput title={"Password"}/>

      <Textinput title={"Confirm Password"}/>
      <Buttons  title={"Sign Up"}
      onpressnext={()=>navigation.navigate("Login")}/>
      <View style={{justifyContent:"center",alignSelf:"center",marginTop:"20%"}}>
        <Text>Already Have Account?<TouchableOpacity >
          <Text >
          Login
          </Text>
          </TouchableOpacity></Text>
      </View> 





      

    </View>                                                                          
  )
}