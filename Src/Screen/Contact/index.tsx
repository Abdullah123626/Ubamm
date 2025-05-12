import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Profilebutton from '../../Commponent/Common/Profilebutton';
import Allitems from '../../Commponent/Common/Allitems';

export default function Contact(props: any) {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: '10%',
          paddingHorizontal: 10,
        }}>
        <Image
          source={require('../../Assits//Images/Hairgirl.png')}
          style={{width: 68, height: 68}}></Image>
        <View style={{width: '50%'}}>
          <Text>Sunie Pham</Text>
          <Text>sunieux@gmail.com</Text>
        </View>
        <TouchableOpacity  onPress={()=>navigation.navigate("Setting")}>

        
        <Image
          source={require('../../Assits/Icon/Setting.png')}
          style={{width: 24, height: 24}}></Image>
          </TouchableOpacity>
      </View>

      <View
        style={{
          width: '90%',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 50,
          borderRadius: 20,
          elevation:5,
          backgroundColor:"white",
          paddingVertical:"5%"

        }}>
        <Profilebutton
          imageset={require('../../Assits/Icon/Location.png')}
          title={'Address'}
          onpressback={()=>navigation.navigate("Adress")}
        />
        <Profilebutton
          imageset={require('../../Assits/Icon/Wallet.png')}
          title={'Payment Method'}
        />
        <Profilebutton
          imageset={require('../../Assits/Icon/Ticket.png')}
          title={'Voucher'}
        />
        <Profilebutton
          imageset={require('../../Assits/Icon/Dill.png')}
          title={'My Whishlist'}
          onpressback={() => {
            navigation.navigate('Whishlistscreen');
          }}
        />
        <Profilebutton
          imageset={require('../../Assits/Icon/stars.png')}
          title={'Rate this app'}
        />
        <Profilebutton
          imageset={require('../../Assits/Icon/Logout.png')}
          title={'Logout'}
        />
      </View>
    </View>
  );
}
