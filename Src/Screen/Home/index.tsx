import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../Commponent/Common/Header';
import Flatlist from '../../Commponent/Common/Core/Recomendedliist';
import Recomendedliist from '../../Commponent/Common/Core/Recomendedliist';
import BannerSlider from '../../Commponent/Common/Core/BannerSlider';

export default function Home(props:any) {
  const{navigation}=props
  const data = [
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
    {
      title: 'Long Sleeve Dress',
      Image: require('../../Assits/Images/Maskgroup.png'),
      price: '45$',
    },
  ];


   const [datas, setDatas] = useState();
    useEffect(() => {
      fetchProducts();                                                    
    }, []);
  
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const json = await response.json();
        console.log('Fetched Products:', json);
        setDatas(json);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };                                        
    console.log('Show   Data', datas);
                                                  
    
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{marginTop: '7%'}}>
          <Header title={'Gemstore'} onpresssidebar={()=>{navigation.openDrawer()}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            height: 40,
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: '7%',
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../Assits/Icon/Bulb.png')}
              tintColor={'black'}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 38,
              height: 36,
              borderRadius: 17,
              backgroundColor: '#F3F3F3',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../Assits/Icon/Bulb22.png')}
              style={{
                width: 35,
                height: 35,
              }}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../Assits/Icon/Glasses.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../Assits/Icon/Lamp.png')}></Image>
          </TouchableOpacity>
        </View>

          <BannerSlider/>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
            marginTop: '8%',
            marginBottom: '5%',
          }}>
          <Text style={{fontSize: 20, fontWeight: '800'}}>
            Feature Products
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Dresses")}>
            <Text>See all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={datas}
          horizontal
          style={{marginLeft:"4%",marginBottom:"5%"}}
          renderItem={item => (
            <View style={{width: 150, marginLeft: '0.5%', height: 300}}>
              <Image
                source={{uri: item.item.image}}
                style={{
                  width: 150,
                  height: 200,
                  borderRadius: 15,
                  resizeMode: 'contain',
                }}></Image>
              <Text>{item.item.title}</Text>
              <Text style={{color: 'red'}}>{item.item.price}</Text>
            </View>
          )}
        />
        
        
         <View>
          <Image source={require("../../Assits/Images/greenglasses.png")} style={{width:"90%",height:150,justifyContent:"center",alignSelf:"center",marginBottom:"8%"}}/>
         </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Recommended</Text>
          <TouchableOpacity>
            <Text>See all</Text>
          </TouchableOpacity>
        </View>
        <Recomendedliist datas={datas} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '7%',
            width: '80%',
            alignSelf: 'center',
            marginBottom:"8%"
          }}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Top Collection</Text>
          <TouchableOpacity>
            <Text>See all</Text>
          </TouchableOpacity>
        </View>

        
          <Image source={require("../../Assits/Images/greenglasses.png")} style={{width:"90%",height:150,justifyContent:"center",alignSelf:"center",marginBottom:"8%"}}/>

        
      </ScrollView>
    </View>
  );
}
