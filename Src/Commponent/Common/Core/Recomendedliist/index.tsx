import { View, Text, FlatList, Image} from 'react-native'
import React from 'react'

interface propType{
datas?:any
}

export default function Recomendedliist(props:propType) {
  const{datas}=props
    const data = [
        {
          title: 'White fashion hoodie',
          Image: require("../../../../Assits/Images/addidasgirl.png"),
          price: '45$',
        },
        {
          title: 'White fashion hoodie',
          Image: require("../../../../Assits/Images/addidasgirl.png"),
          price: '45$',
        },
        {
          title: 'White fashion hoodie',
          Image: require("../../../../Assits/Images/addidasgirl.png"),
          price: '45$',
        },
        {
          title: 'White fashion hoodie',
          Image: require("../../../../Assits/Images/addidasgirl.png"),
          price: '45$',
        },
        {
          title: 'White fashion hoodie',
          Image: require("../../../../Assits/Images/addidasgirl.png"),
          price: '45$',
        },
        {
          title: 'White fashion hoodie',
          Image: require("../../../../Assits/Images/addidasgirl.png"),
          price: '45$',
        },
        {
          title: 'White fashion hoodie',
          Image: require("../../../../Assits/Images/addidasgirl.png"),
          price: '45$',
        },
        {
          title: 'White fashion hoodie',
          Image: require("../../../../Assits/Images/addidasgirl.png"),
          price: '45$',
        },
        {
          title: 'White fashion hoodie',
          Image: require("../../../../Assits/Images/addidasgirl.png"),
          price: '45$',
        },
    ]
  return (
    <View style={{flex:1}}>
<FlatList data={data}
horizontal
renderItem={(item)=>(<View style={{marginTop:"19%",flexDirection:"row",marginHorizontal: 8}}>
  <Image source={item.item.Image} style={{width:66,height:66}}/>
  <View >
    <Text style={{fontSize:15,marginTop:"5%",marginLeft:8}}>
      {item.item.title}
    </Text>
    <Text style={{fontSize:15,fontWeight:"800",marginTop:"5%",marginLeft:8}}>
      {item.item.price}
    </Text>
  </View>
</View>)}>

</FlatList>
      
    </View>
  )
}