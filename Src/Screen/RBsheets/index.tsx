import {Text} from '@react-navigation/elements';
import React, {useRef} from 'react';
import {View, Button, Image, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
interface propType {
  ison?: any;
  isof?: () => void;
}

export default function RBSheets(props: propType) {
  const {ison, isof} = props;


  return (
    <RBSheet
      ref={ison}
      useNativeDriver={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: '#000',
        },
        container: {
          height: 380,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        },
      }}
      customModalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}>
      <View style={{flex: 1}}>
        <View>
          <Image
            source={require('../../Assits/Images/Success.png')}
            style={{
              width: 57,
              height: 70,
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: '10%',
            }}></Image>
        </View>
        <Text
          style={{
            fontSize: 23,
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: '13%',
            textAlign:"center"
          }}>
          Your password has been changed
        </Text>
        <Text
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: '2%',
          }}>
          Welcome back! Discover now
        </Text>
        <TouchableOpacity
          style={{
            width: '90%',
            height: 55,
            backgroundColor: '#000000',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: '12%',
            borderRadius: 100,
          }}
          onPress={isof}>
          <Text style={{alignSelf: 'center', fontSize: 22, color: 'white'}}>
            Browser home
          </Text>
        </TouchableOpacity>
      </View>
    </RBSheet>
  );
}
