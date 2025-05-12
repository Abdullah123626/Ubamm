import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';

export default function Boards() {
  const data = [
    {
      Image: require('../../../../Assits/Images/pics5.png'),
      title: 'Going Out Fits',
      items: '36 items',
    },
    {
      Image: require('../../../../Assits/Images/pics5.png'),
      title: 'Going Out Fits',
      items: '36 items',
    },
    {
      Image: require('../../../../Assits/Images/pics5.png'),
      title: 'Going Out Fits',
      items: '36 items',
    },
    {
      Image: require('../../../../Assits/Images/pics5.png'),
      title: 'Going Out Fits',
      items: '36 items',
    },
    {
      Image: require('../../../../Assits/Images/pics5.png'),
      title: 'Going Out Fits',
      items: '36 items',
    },
    {
      Image: require('../../../../Assits/Images/pics5.png'),
      title: 'Going Out Fits',
      items: '36 items',
    },
    {
      Image: require('../../../../Assits/Images/pics5.png'),
      title: 'Going Out Fits',
      items: '36 items',
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        renderItem={item => (
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              width: '90%',
              marginBottom: '5%',
              marginTop:"7%",
              
            }}>
            <Image source={item.item.Image} style={{width: "97%", height: 200,resizeMode:"contain",alignSelf:"center"}} />

            <Text style={{fontSize: 30, fontWeight: 'bold'}}>
              {item.item.title}{' '}
            </Text>
            <Text style={{fontSize: 12, color: '#8A8A8F'}}>
              {item.item.items}
            </Text>
            <View
              style={{
                width: '99%',
                height: 1,
                backgroundColor: 'black',
                alignSelf: 'center',
                marginTop: '5%',
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
