import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Feedback() {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '10%',
          marginLeft: '1%',
        }}>
        <Image
          source={require('../../Assits/Icon/Backk.png')}
          style={{width: 35, height: 35}}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            marginTop: '2%',
            marginLeft: '2%',
          }}>
          Share your feedback
        </Text>
        <View></View>
      </View>
      <Text
        style={{
          fontSize: 16,
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '10%',
          fontWeight: '500',
        }}>
        What is your opinion of GemStore?
      </Text>
      <View
        style={{
          width: '80%',
          height: '30%',
          backgroundColor: 'white',
          alignSelf: 'center',
          marginTop: '20%',
          elevation: 20,
          borderRadius: 20,
        }}>
        <TextInput
          style={{
            height: 250,
            alignSelf: 'center',
            textAlignVertical: 'top',
            paddingHorizontal: '3%',
            width: '100%',
          }}
          multiline
          placeholder="Would you like to write anything about this product?"
          placeholderTextColor={'black'}></TextInput>
        <Text
          style={{
            alignSelf: 'flex-end',
            marginRight: '5%',
            position:"absolute",
            bottom:"5%"

           
          }}>
          50 Character
        </Text>
      </View>
      <View style={{flexDirection:"row", marginTop:"5%",marginLeft:"11%"}}>
        <Image source={require("../../Assits/Icon/background.png")} style={{width:70,height:60}}/>
        <Image source={require("../../Assits//Icon/background.png")} style={{width:70,height:60,marginLeft:"5%"}}/>
      </View>
       <TouchableOpacity
       
             
                 
                                                                                           
                    style={{
                      backgroundColor:"black",
                     
                      position: 'absolute',
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginTop: '180%',
                      width: '70%',
                      height: 40,
                      borderRadius:15,
                      alignItems:"center",
                    }}>
                    <Text style={{fontSize: 20, fontWeight: '600',color:"white"}}>Send feedback</Text>
                  </TouchableOpacity>
    </View>
  );
}
