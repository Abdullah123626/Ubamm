import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function FatchApi() {
  const [data, setData] = useState();
  useEffect(() => {
    console.log('Home component mounted');
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    console.log('Starting to fetch products');
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      console.log('Response received:', response.status);
      const json = await response.json();
      console.log('Fetched Products:', json);
      setData(json);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

                                            
  return (
    <View>
      <FlatList
        data={data}
        renderItem={item => (
          <View>
            <Text>{item.item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
