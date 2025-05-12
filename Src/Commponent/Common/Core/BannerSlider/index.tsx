import React, {useRef, useEffect} from 'react';
import {View, Image, FlatList, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const banners = [
  require('../../../../Assits/Images/Glassesgirl.png'),
  require('../../../../Assits/Images/Glassesgirl.png'),
  require('../../../../Assits/Images/Glassesgirl.png'),
];

const BannerSlider = () => {
  const flatListRef = useRef();
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % banners.length;
      flatListRef.current?.scrollToOffset({
        offset: index * width,
        animated: true,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        ref={flatListRef}
        data={banners}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => <Image source={item} style={styles.image} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: 200,
    resizeMode: 'contain',
  },
});

export default BannerSlider;
