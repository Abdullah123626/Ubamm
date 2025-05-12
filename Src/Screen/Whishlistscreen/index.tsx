import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Commponent/Common/Header';
import Allitems from '../../Commponent/Common/Allitems';
import Boards from '../../Commponent/Common/Core/Boards';

export default function Whishlistscreen() {
  const [sellector, setselector] = useState(1);


  return (
    <View style={{flex:1,}}>
      <Header title={'My Whishlist'} />

      <View
        style={{
          flexDirection: 'row',
          width: '70%',
          height: 37,
          justifyContent: 'space-around',
          marginTop: '10%',
          alignItems: 'center',
          borderWidth: 1,
          borderColor:"black",alignSelf:"center"
        }}>
        <TouchableOpacity
          onPress={() => {
            setselector(1);
          }}
          style={{
            width: "50%",
            height: 36,
            alignSelf: 'center',
            backgroundColor: sellector == 1 ? '#000000' : 'white',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: sellector == 1 ? 'white' : '000000',
              alignSelf: 'center',
            }}>
            All items
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setselector(2);
          }}
          style={{
            width: "50%",
            height: 36,
            alignSelf: 'center',
            backgroundColor: sellector == 2 ? '#000000' : 'white',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: sellector == 2 ? 'white' : '000000',
              alignSelf: 'center',
            }}>
            Board
          </Text>
        </TouchableOpacity>
      </View>


      {sellector == 1 ? <Allitems /> : <Boards />}
    </View>
  );
}
