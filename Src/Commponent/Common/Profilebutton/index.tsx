import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
interface proptype{
    imageset?:any
    title?:any
    onpressback?:()=>void
}


export default function Profilebutton(prop:proptype) {
    const{imageset,title,onpressback}=prop
  return (
    <View style={{}}>
      <View
              style={{
                flexDirection: 'row',
                width: '80%',
                height: 40,
                justifyContent: 'space-between',
                alignSelf:"center",
                marginTop:"7%"
                
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignSelf: 'center',
                }}>
                <Image
                  source={imageset}
                  style={{width: 21, height: 21}}></Image>
                <Text style={{fontSize: 14,marginLeft:"3%"}}>{title}</Text>
              </View>
              <TouchableOpacity onPress={onpressback}>
                <Image
                  source={require("../../../Assits/Icon/backicon.png")}
                  style={{width: 21, height: 21}}></Image>
              </TouchableOpacity>
            </View>
            <View
                    style={{
                      width: '80%',
                      height: 1,
                      backgroundColor: 'black',
                      alignSelf: 'center',
                    }}></View>
    </View>
  )
}