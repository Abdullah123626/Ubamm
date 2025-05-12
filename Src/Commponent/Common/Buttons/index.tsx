import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
interface proptype{
  title?:any
  onpressnext?:()=>void

    
}

export default function Buttons(props:proptype) {
  const{onpressnext,title}=props
  return (
    <View>
      <TouchableOpacity
      onPress={onpressnext}
        style={{
          width: '30%',
          height: 50,
          backgroundColor: '#2D201C',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '30%',
          borderRadius:100
        }}>
        <Text style={{color: 'white',alignSelf:"center",fontSize:16}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
