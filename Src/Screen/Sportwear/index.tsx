import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Commponent/Common/Header';
import { ScrollView } from 'react-native-gesture-handler';

export default function Sportwear() {
  const [discription, setDiscription] = useState(false);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
      
        }}>
        <Image
          source={require('../../Assits/Images/girlsPic.png')}
          style={{
            width: '90%',
            height: 350,
            resizeMode: 'center',
            alignSelf: 'center',
          }}               
        />                                                         

        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
            marginTop: '5%',
          }}>
          <TouchableOpacity>
            <Image           source={require('../../Assits/Icon/Backk.png')}
              style={{width: 40, height: 40, resizeMode: 'center'}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../Assits/Icon/Heart.png')}
              style={{width: 40, height: 40, resizeMode: 'center'}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: '90%',
          elevation: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '5%',
          }}>
          <Text>Sportwear Set</Text>
          <Text>$ 80.00</Text>
        </View>
        <View>
          <Image
            source={require('../../Assits/Icon/stars.png')}
            style={{
              width: 80,
              height: 80,
              marginLeft: '15%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{width: '80%', height: '8%', alignSelf: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={{}}>Colour</Text>
            <Text style={{}}>Size</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View
              style={{flexDirection: 'row', marginTop: '5%', marginLeft: '5%'}}>
              <TouchableOpacity
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 11,
                  backgroundColor: 'black',
                }}></TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 11,
                  backgroundColor: 'pink',
                }}></TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 11,
                  backgroundColor: 'blue',
                }}></TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '5%',
                marginLeft: '10%',
              }}>
              <TouchableOpacity style={{height: 20, width: 20}}>
                <Text>S</Text> l
              </TouchableOpacity>
              <TouchableOpacity style={{height: 20, width: 20}}>
                <Text>M</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  backgroundColor: 'black',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}>L</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setDiscription(discription ? false : true)}
          style={{
            width: '80%',
            height: 40,
            alignSelf: 'center',
            marginTop: '5%',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 15}}>Description</Text>
            <Image
              source={require('../../Assits/Images/expand.png')}
              style={{height: 20, width: 20}}
            />
          </View>
        </TouchableOpacity>

        {discription && (
          <View style={{width: '80%', height: '11%', alignSelf: 'center'}}>
            <Text>
              Sportswear is no longer under culture, it is no longer indie or
              cobbled together as it once was. Sport is fashion today. The top
              is oversized in fit and style, may need to size down.
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={{
            width: '80%',
            height: 40,
            alignSelf: 'center',
            marginTop: '5%',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 15}}>Review</Text>
            <Image
              source={require('../../Assits/Images/expand.png')}
              style={{height: 20, width: 20}}
            />
          </View>

         
            <View style={{width:"90%",height:150,backgroundColor:"grey",marginTop:"8%",alignSelf:"center"}}>
              <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={{fontSize:15,fontWeight:"700"}}>4.9</Text>
                <Text style={{fontSize:10}}>
                OUT OF 5
                </Text>
                <Image  style={{width:25,height:25,}}/>
              </View>

              

              

<View>

</View>


              

            </View>
          
















        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '100%',
            height: 70,
            backgroundColor: 'black',
            borderRadius: 20,
            marginTop: '45%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: '5%',
            }}>
            <Image
              source={require('../../Assits/Icon/Wallet.png')}
              style={{width: 25, height: 25}}
            />

            <Text style={{color: 'white', marginLeft: '2%'}}>Add To Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
