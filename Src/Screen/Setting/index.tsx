import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import Textinput from '../../Commponent/Common/Textinput';

export default function Setting(props:any) {
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
        <Text style={{fontSize: 17, fontWeight: '500'}}>Profile Setting</Text>
        <View></View>
      </View>
      <View
        style={{
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: '10%',
        }}>
        <Image
          source={require('../../Assits/Images/Hairgirl.png')}
          style={{width: 60, height: 60, borderRadius: 30}}
        />
        <TouchableOpacity>
          <Image
            source={require('../../Assits/Icon/camera.png')}
            style={{
              position: 'absolute',
              width: 20,
              height: 20,
              bottom: 0,
              alignSelf: 'flex-end',
            }}></Image>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: '15%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: '5%',
        }}>
        <View>
          <Text style={{color: '#A6ABC4'}}>First Name</Text>

          <TextInput
            value="sunnie"
            style={{
              borderBottomWidth: 1,
              width: 130,
              borderColor: '#D6D6D6',
            }}></TextInput>
        </View>
        <View>
          <Text style={{color: '#A6ABC4'}}>Last Name</Text>

          <TextInput
            value="pham"
            style={{
              borderBottomWidth: 1,
              width: 130,
              borderColor: '#D6D6D6',
            }}></TextInput>
        </View>
      </View>

      <View style={{marginTop: '7%', marginLeft: '5%'}}>
        <Text style={{marginLeft: 2, color: 'A6ABC4'}}>Email</Text>

        <TextInput
          value="sunieux@gmail.com"
          style={{borderBottomWidth: 1, width: 290, borderColor: '#D6D6D6'}}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: '5%'}}>
        <View style={{marginTop: '8%', marginLeft: '5%'}}>
          <Text>Gender</Text>
          <TextInput
            value="Male"
            style={{borderBottomWidth: 1, width: 80, borderColor: '#D6D6D6'}}
          />
        </View>
        <View style={{marginTop: '8%', marginLeft: '5%'}}>
          <Text>Phone</Text>
          <TextInput
            value="(+1) 23456789"
            style={{borderBottomWidth: 1, width: 210, borderColor: '#D6D6D6'}}
          />
        </View>
      </View>

      <View>
        <TouchableOpacity
        onPress={()=>navigation.navigate("Payment")}
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
            Save Changes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
