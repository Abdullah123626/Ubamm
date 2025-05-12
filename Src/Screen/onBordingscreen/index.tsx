import React, {Component} from 'react';
import {
  AppRegistry,
  RootTagContext,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import Swiper from 'react-native-swiper';

const onBordingscreen = (props:any) => {
  const{navigation}=props
const  handleIndexChange = (index) => {
    if (index === 2) {
      // Navigate after 2 seconds on last screen
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    }
  };
  return (
    <Swiper style={styles.wrapper} showsButtons={true}         onIndexChanged={handleIndexChange}
>
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#FFFFF'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '700',
              alignSelf: 'center',
              marginTop: '17%',
            }}>
Never Miss a Dose with Your Trusted-Person Medicine Reminder          </Text>

          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: '700',
              alignSelf: 'center',
              marginTop: '6%',
            }}>
            Special new arrivals just for you
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#464447',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFFFFF40',
              position: 'absolute',
              justifyContent: 'center',
              alignSelf: 'center',
              width: '50%',
              height: 40,
              borderRadius: 15,
              alignItems: 'center',
              marginTop: '10%',
            }}>
            <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>
              Shopping Now
            </Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require('../../Assits/Images/Blackjacket.png')}
          style={{
            width: 261,
            height: 360,
            alignSelf: 'center',
            marginTop: '50%',
            position: 'absolute',
            borderRadius: 17,
          }}
        />
      </View>

      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '700',
            alignSelf: 'center',
            marginTop: '17%',
          }}>
          Update trendy outfit
        </Text>

        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: '700',
            alignSelf: 'center',
            marginTop: '6%',
          }}>
          Favorite brands and hottest trends
        </Text>
        <Image
          source={require('../../Assits/Images/whittteecort.png')}
          style={{
            width: 261,
            height: 360,
            alignSelf: 'center',
            marginTop: '15%',
          }}
        />

        <View
          style={{
            width: '100%',
            height: '30%',
            backgroundColor: '#464447',
            marginTop: '2%',
          }}></View>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFFFFF40',
            position: 'absolute',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: '180%',
            width: '50%',
            height: 40,
            borderRadius: 15,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>
            Shopping Now
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '700',
            alignSelf: 'center',
            marginTop: '17%',
          }}>
          Explore your true style
        </Text>

        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: '700',
            alignSelf: 'center',
            marginTop: '6%',
          }}>
          Relax and let us bring the style to you
        </Text>
        <Image
          source={require('../../Assits/Images/blackwhitejacket.png')}
          style={{
            width: 261,
            height: 360,
            alignSelf: 'center',
            marginTop: '15%',
          }}
        />

        <View
          style={{
            width: '100%',
            height: '30%',
            backgroundColor: '#464447',
            marginTop: '2%',
          }}></View>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFFFFF40',
            position: 'absolute',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: '180%',
            width: '50%',
            height: 40,
            borderRadius: 15,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>
            Shopping Now
          </Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

// define your styles

//make this component available to the app
export default onBordingscreen;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
