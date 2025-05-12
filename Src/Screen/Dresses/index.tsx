import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../Commponent/Common/Header';
import Allitems from '../../Commponent/Common/Allitems';
import Dressesflat from '../../Commponent/Common/Core/Dressesflat';

export default function Dresses() {
  return (
    <View style={{flex: 1}}>
        <View style={{marginTop:"5%"}}>

        
      <Header title={'Dresses'} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: '5%',
          alignSelf: 'center',
          width: '90%',
          height: '10%',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          Found{"\n"}152 Results
        </Text>

        <TouchableOpacity
          style={{
            width: '25%',
            height: 33,
            borderRadius: 80,
            borderWidth: 1,
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 16, fontWeight: '300', alignSelf: 'center'}}>
            Filter
          </Text>
        </TouchableOpacity>
      </View>
      <Dressesflat/>
    </View>
  );
}
