import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Textinput from '../../Commponent/Common/Textinput';

export default function Newcard(props: any) {
  const {navigation} = props;
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
        <Text style={{fontSize: 17, fontWeight: '500'}}>Add new card</Text>
        <View></View>
      </View>

      <Image
        source={require('../../Assits/Icon/mastercard.png')}
        style={{
          width: '80%',
          height: 190,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />

      <View style={{marginTop: '9%'}}>
        <Text style={{marginLeft: '6%'}}>Cardholder Name</Text>
        <TextInput
          placeholder="Sunie Pham"
          placeholderTextColor={'black'}
          style={{
            marginTop: '5%',
            width: '90%',
            height: 37,
            justifyContent: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 15,
            fontSize: 12,
            backgroundColor: '#FCFCFC',
            paddingHorizontal: '4%',
          }}></TextInput>
      </View>

      <View style={{marginTop: '9%'}}>
        <Text style={{marginLeft: '6%'}}>Card Number</Text>
        <TextInput
          placeholder="5412363272837284"
          placeholderTextColor={'black'}
          style={{
            marginTop: '5%',
            width: '90%',
            height: 37,
            justifyContent: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 15,
            fontSize: 12,
            backgroundColor: '#FCFCFC',
            paddingHorizontal: '4%',
          }}></TextInput>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Voucher')}
          style={{
            width: '45%',
            height: '20%',
            backgroundColor: '#343434',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: '25%',
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            Add Card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
