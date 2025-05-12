import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Payment(props:any) {
    const {navigation}=props
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
        <Text style={{fontSize: 17, fontWeight: '500'}}>Payment</Text>
        <View></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: '8%',
        }}>
        <Text style={{fontSize: 17, fontWeight: '500'}}>Card Management</Text>

        <TouchableOpacity onPress={()=>navigation.navigate("Newcard")}>
          <Text style={{color: '#ED0006', fontSize: 15}}>Add new+</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: '8%'}}>
        <Image
          source={require('../../Assits/Icon/Visa.png')}
          style={{
            width: '98%',
            height: 190,
            justifyContent: 'center',
            alignSelf: 'center',
            resizeMode: 'contain',
            borderRadius: 25,

          }}
        />
      </View>

      <View style={{marginLeft:"10%",width:"100%",height:30,}}>
        <Text style={{fontSize: 12, fontWeight: '500'}}>or check out with</Text>
      </View>


      <View>
        <Image source={require("../../Assits/Icon/payments.png")} style={{width:291,height:34,alignSelf:"center",marginTop:"10%"}}/>
      </View>
    </View>
  );
}
