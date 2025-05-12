import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

export default function Dressesflat() {
  
    const data = [
      {
        Image: require('../../../../Assits/Images/pinkdress.png'),
  
        title: 'Front Tie Mini Dress',
  
        price: '$ 59.00',
      },
      {
        Image: require('../../../../Assits/Images/newblack.png'),
  
        title: 'Front Tie Mini Dress',
  
        price: '$ 59.00',
      },
      {
        Image: require('../../../../Assits/Images/whitedress.png'),
  
        title: 'Front Tie Mini Dress',
  
        price: '$ 59.00',
      },
      {
        Image: require('../../../../Assits/Images/pinkdress.png'),
  
        title: 'Front Tie Mini Dress',
  
        price: '$ 59.00',
      },{
        Image: require('../../../../Assits/Images/whitedress.png'),
  
        title: 'Front Tie Mini Dress',
  
        price: '$ 59.00',
      },{
        Image: require('../../../../Assits/Images/newblack.png'),
  
        title: 'Front Tie Mini Dress',
  
        price: '$ 59.00',
      },{
        Image: require('../../../../Assits/Images/pinkdress.png'),
  
        title: 'Front Tie Mini Dress',
  
        price: '$ 59.00',
      },
      {
        Image: require('../../../../Assits/Images/whitedress.png'),
  
        title: 'Front Tie Mini Dress',
  
        price: '$ 59.00',
      },
    ];
  return (
    <View style={{flex:1,}}>
      
      
            <FlatList
              data={data}
              numColumns={2}
              style={{ alignSelf: 'center'}}
              renderItem={item => (
                <View style={{marginTop: '11%', marginHorizontal: '2%'}}>
                  <Image source={item.item.Image} style={{width: 141, height: 186,resizeMode:"contain"}} />
                  <Image source={require("../../../../Assits/Icon/Heart.png")} style={{position:"absolute",width:27,height:27,marginTop:10,marginLeft:"80%"}}/>
      
                  <Text style={{fontSize: 13}}>{item.item.title}</Text>
                  <Text style={{fontSize: 12}}>{item.item.price}</Text>
                </View>
              )}></FlatList>
    </View>
  )
}