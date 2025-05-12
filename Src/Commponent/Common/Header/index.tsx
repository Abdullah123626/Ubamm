import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
interface proptype {
  title?: any;
  onpressnotify?: () => void;
  onpresssidebar?: () => void;
}

export default function Header(props: proptype) {
  const {title, onpressnotify, onpresssidebar} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginTop: '5%',
      }}>
      <TouchableOpacity onPress={onpresssidebar}>
        <Image
          source={require('../../../Assits/Icon/Lines.png')}
          style={{width: 18, height: 17}} ></Image>
      </TouchableOpacity>
      <Text style={{fontSize: 20, fontWeight: '700'}}>{title}</Text>
      <TouchableOpacity onPress={onpressnotify}>
        <Image
          source={require('../../../Assits/Icon/Notification.png')}
          style={{width: 26, height: 26}}></Image>
      </TouchableOpacity>
    </View>
  );
}
