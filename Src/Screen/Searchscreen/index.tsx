import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Header from '../../Commponent/Common/Header';
import {ScrollView} from 'react-native-gesture-handler';

export default function Searchscreen(props:any) {
  const{navigation}=props
  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: '3%'}}>
        <Header title={'Discover'} 
        // onpressnotify={()=>navigation.navigate("Sportwear")}
        onpressnotify={()=>navigation.navigate("Sportwear")}
        />
      </View>
      <View
        style={{
          width: '90%',
          height: '8%',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: '5%',
        }}>
        {/* <View> */}                                                                                                        

        <TextInput
          style={{
            width: '78%',
            height: 45,
            borderRadius: 80,
            borderWidth: 0.1,
            backgroundColor: 'FAFAFA',
          }}
          placeholder="Search"></TextInput>
        {/* <Image source={require("../../Assits/Icon/search.png")} style={{width:18,height:18}}/>
        </View> */}

        <TouchableOpacity>
          <Image
            source={require('../../Assits/Icon/Filter.png')}
            style={{
              width: 51,
              height: 49,
              backgroundColor: '#FAFAFA',
              borderWidth: 0.1,
              borderRadius: 10,
            }}></Image>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            marginTop: '15%',
            alignSelf: 'center',
            width: '90%',
            height: 150,
          }}>
          <Image
            source={require('../../Assits/Images/clothing.png')}
            style={{width: '99%', height: '99%', resizeMode: 'contain'}}
          />
        </View>

        <View
          style={{
            width: '85%',
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 20,
            marginTop: '5%',
          }}>
          <View
            style={{
              width: '90%',
              height: 40,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '2%',
              borderBottomWidth: 1,
              
            }}>
            <Text style={{fontSize: 15, fontWeight: '400'}}>Jacket</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>128 items</Text>
              <Image
                source={require('../../Assits/Icon/backicon.png')}
                style={{
                  width: 16,
                  height: 16,
                  marginTop: '3%',
                  marginLeft: '4%',
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: '90%',
              height: 40,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '4%',
              borderBottomWidth: 1,
            }}>
            <Text style={{fontSize: 15, fontWeight: '400'}}>Skirts</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>128 items</Text>
              <Image
                source={require('../../Assits/Icon/backicon.png')}
                style={{
                  width: 16,
                  height: 16,
                  marginTop: '3%',
                  marginLeft: '4%',
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: '90%',
              height: 40,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '5%',
              borderBottomWidth: 1,
            }}>
            <Text style={{fontSize: 15, fontWeight: '400'}}>Dresses</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>128 items</Text>
              <Image
                source={require('../../Assits/Icon/backicon.png')}
                style={{
                  width: 16,
                  height: 16,
                  marginTop: '3%',
                  marginLeft: '4%',
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: '75%',
              height: 40,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '5%',
              borderBottomWidth: 1,
              marginLeft:"14%"
            }}>
            <Text style={{fontSize: 15, fontWeight: '400'}}>Sweaters</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>128 items</Text>
              <Image
                source={require('../../Assits/Icon/backicon.png')}
                style={{
                  width: 16,
                  height: 16,
                  marginTop: '3%',
                  marginLeft: '4%',
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: '75%',
              height: 40,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '5%',
              borderBottomWidth: 1,
              marginLeft:"14%"
            }}>
            <Text style={{fontSize: 15, fontWeight: '400'}}>Jeans</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>128 items</Text>
              <Image
                source={require('../../Assits/Icon/backicon.png')}
                style={{
                  width: 16,
                  height: 16,
                  marginTop: '3%',
                  marginLeft: '4%',
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: '90%',
              height: 40,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '5%',
              borderBottomWidth: 1,
            }}>
            <Text style={{fontSize: 15, fontWeight: '400'}}>T-Shirts</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>128 items</Text>
              <Image
                source={require('../../Assits/Icon/backicon.png')}
                style={{
                  width: 16,
                  height: 16,
                  marginTop: '3%',
                  marginLeft: '4%',
                  borderBottomWidth: 1,
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: '90%',
              height: 40,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '5%',
              borderBottomWidth: 1,
            }}>
            <Text style={{fontSize: 15, fontWeight: '400'}}>Pants</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>128 items</Text>
              <Image
                source={require('../../Assits/Icon/backicon.png')}
                style={{
                  width: 16,
                  height: 16,
                  marginTop: '3%',
                  marginLeft: '4%',
                }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: '5%',
            alignSelf: 'center',
            width: '90%',
            height: 150,
          }}>
          <Image
            source={require('../../Assits/Images/Bags.png')}
            style={{width: '99%', height: '99%', resizeMode: 'contain'}}
          />
        </View>

        <View
          style={{
            marginTop: '5%',
            alignSelf: 'center',
            width: '90%',
            height: 150,
          }}>
          <Image
            source={require('../../Assits/Images/Sandles.png')}
            style={{width: '99%', height: '99%', resizeMode: 'contain'}}
          />
        </View>

        <View
          style={{
            marginTop: '5%',
            alignSelf: 'center',
            width: '90%',
            height: 150,
          }}>
          <Image
            source={require('../../Assits/Images/Corts.png')}
            style={{width: '99%', height: '99%', resizeMode: 'contain'}}
          />
        </View>

        <View
          style={{
            marginTop: '5%',
            alignSelf: 'center',
            width: '90%',
            height: 150,
          }}>
          <Image
            source={require('../../Assits/Images/Bags.png')}
            style={{width: '99%', height: '99%', resizeMode: 'contain'}}
          />
        </View>



        
      </ScrollView>
    </View>
  );
}
