import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Welcome(props:any) {
  const{navigation}=props
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../../Assits/Images/1.png')}
        style={{width: '100%', height: '100%', resizeMode: 'cover'}}></Image>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '900',
          position: 'absolute',
          alignSelf: "center",
          color: 'white',
          alignItems:"center",bottom:"24%",
          textAlign:"center"                 

          
        }}>
        Welcome to GemStore
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '500',
          position: 'absolute',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '160%',
          color: 'white',
        }}>
        The home for a fashionista
      </Text>
      <TouchableOpacity
      onPress={()=>navigation.navigate("onBordingscreen")}
                                                                               
        style={{
          backgroundColor: '#FFFFFF40',
          position: 'absolute',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '180%',
          width: '40%',
          height: 40,
          borderRadius:15,
          alignItems:"center",
        }}>
        <Text style={{fontSize: 20, fontWeight: '600',color:"white  "}}>Get started</Text>
      </TouchableOpacity>                             
    </View>         
  );
}
