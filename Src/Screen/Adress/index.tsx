import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';

export default function Adress(props:any) {
    const{navigation}=props
    const[selector,setselector]=useState(1);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '10%',
          marginLeft: '1%',
        }}>
        <Image
          source={require('../../Assits/Icon/Backk.png')}
          style={{width: 35, height: 35}}
        />
        <Text style={{fontSize: 18, fontWeight: '500', marginTop: '2%'}}>
          Delivery address
        </Text>
        <View></View>
      </View>

      <View
        style={{
          width: '90%',
          height: '15%',
          alignSelf: 'center',
          marginTop: '9%',
          backgroundColor: 'white',
          elevation: 15,
          borderRadius: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>{setselector(1);}}
          >
            <Image
              source={ selector==1 ?require('../../Assits/Icon/blackcircle.png'):require("../../Assits/Icon/circlee.png")}
              style={{width: 16, height: 16, marginTop: 25, marginLeft: 10}}
            />
          </TouchableOpacity>

          <Image
            source={require('../../Assits/Icon/Vectorrrr.png')}
            style={{width: 30, height: 35, marginTop: 20, marginLeft: 19}}
          />
          <View style={{marginTop: '5%', marginLeft: '3%'}}>
            <Text>Send to</Text>
            <Text style={{fontSize: 14, fontWeight: '500', marginTop: '4%'}}>
              My Office
            </Text>
          </View>
          <TouchableOpacity 
          
          
          style={{marginLeft:"30%",marginTop:"5%"}}>
            <Text style={{color:"red"}}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginLeft: '13%',
            marginTop: '5%',
            fontSize: 12,
            color: '#777E90',
          }}>
          SBI Building, street 3, Software Park
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          height: '15%',
          alignSelf: 'center',
          marginTop: '9%',
          backgroundColor: 'white',
          elevation: 15,
          borderRadius: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>{setselector(2);}}>
            <Image
              source={selector==2?require('../../Assits/Icon/blackcircle.png'):require("../../Assits/Icon/circlee.png")}
              style={{width: 16, height: 16, marginTop: 25, marginLeft: 10}}
            />
          </TouchableOpacity>

          <Image
            source={require('../../Assits/Icon/Vectorrrr.png')}
            style={{width: 30, height: 35, marginTop: 20, marginLeft: 19}}
          />
          <View style={{marginTop: '5%', marginLeft: '3%'}}>
            <Text>Send to</Text>
            <Text style={{fontSize: 14, fontWeight: '500', marginTop: '4%'}}>
              My Office
            </Text>
          </View>
          <TouchableOpacity style={{marginLeft:"30%",marginTop:"5%"}}>
            <Text style={{color:"red"}}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginLeft: '13%',
            marginTop: '5%',
            fontSize: 12,
            color: '#777E90',
          }}>
          SBI Building, street 3, Software Park
        </Text>
      </View>

       <TouchableOpacity
       onPress={()=>navigation.navigate("Feedback")}
           
                                                                                     
              style={{
                backgroundColor:"black",
               
                position: 'absolute',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: '180%',
                width: '70%',
                height: 40,
                borderRadius:15,
                alignItems:"center",
              }}>
              <Text style={{fontSize: 20, fontWeight: '600',color:"white"}}>Add New Address</Text>
            </TouchableOpacity>
      
    </View>
  );
}
