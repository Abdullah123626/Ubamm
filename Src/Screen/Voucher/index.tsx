import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'

export default function Voucher() {
  return (
    <View style={{flex:1}}>
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
              <Text style={{fontSize: 18, fontWeight: '500',marginTop:"2%"}}>Voucher</Text>
              <View></View>
            </View>


            <View style={{width:"90%",height:"15%",alignSelf:"center",marginTop:"9%",flexDirection:"row"}}>
                <View style={{width:"20%",height:"60%",backgroundColor:"black",marginTop:"7%",marginLeft:"5%",borderRadius:10}}>
                    <Text style={{fontSize:18,color:"white",justifyContent:"center",alignSelf:"center",marginTop:"28%"}}>
                        50%
                    </Text>

                </View>
                <View style={{marginTop:"2%",marginLeft:"3%",justifyContent:"space-around"}}>
                    <Text style={{fontSize:14,fontWeight:"700"}}>
                    Black Friday
                    </Text>
                    <Text style={{fontSize:12,fontWeight:"500",color:"#6E768A"}}>
                    Sale off 50%
                    </Text>
                    <Text style={{fontSize:14,fontWeight:"700"}}>
                    Code: fridaysale
                    </Text>
                </View>
                <Image source={require("../../Assits/Icon/Line.png")} style={{height:"98%",marginLeft:"20%"}}/>
                <View style={{justifyContent:"space-around",marginLeft:"3%"}}>

               
                <Text style={{color:"#777E90",fontSize:12}}>
                Exp
                </Text>
                <Text style={{fontSize:12}}>
                20
                </Text>
                <Text style={{fontSize:12}}>
                Dec
                </Text>
                </View>
                

                
                
            </View>

            
            <View style={{width:"90%",height:"15%",alignSelf:"center",marginTop:"9%",flexDirection:"row"}}>
                <View style={{width:"20%",height:"60%",backgroundColor:"black",marginTop:"7%",marginLeft:"5%",borderRadius:10}}>
                    <Text style={{fontSize:18,color:"white",justifyContent:"center",alignSelf:"center",marginTop:"28%"}}>
                        50%
                    </Text>

                </View>
                <View style={{marginTop:"2%",marginLeft:"3%",justifyContent:"space-around"}}>
                    <Text style={{fontSize:14,fontWeight:"700"}}>
                    Black Friday
                    </Text>
                    <Text style={{fontSize:12,fontWeight:"500",color:"#6E768A"}}>
                    Sale off 50%
                    </Text>
                    <Text style={{fontSize:14,fontWeight:"700"}}>
                    Code: fridaysale
                    </Text>
                </View>
                <Image source={require("../../Assits/Icon/Line.png")} style={{height:"98%",marginLeft:"20%"}}/>
                <View style={{justifyContent:"space-around",marginLeft:"3%"}}>

               
                <Text style={{color:"#777E90",fontSize:12}}>
                Exp
                </Text>
                <Text style={{fontSize:12}}>
                20
                </Text>
                <Text style={{fontSize:12}}>
                Dec
                </Text>
                </View>
                

                
                
            </View>

            
            <View style={{width:"90%",height:"15%",alignSelf:"center",marginTop:"9%",flexDirection:"row"}}>
                <View style={{width:"20%",height:"60%",backgroundColor:"black",marginTop:"7%",marginLeft:"5%",borderRadius:10}}>
                    <Text style={{fontSize:18,color:"white",justifyContent:"center",alignSelf:"center",marginTop:"28%"}}>
                        50%
                    </Text>

                </View>
                <View style={{marginTop:"2%",marginLeft:"3%",justifyContent:"space-around"}}>
                    <Text style={{fontSize:14,fontWeight:"700"}}>
                    Black Friday
                    </Text>
                    <Text style={{fontSize:12,fontWeight:"500",color:"#6E768A"}}>
                    Sale off 50%
                    </Text>
                    <Text style={{fontSize:14,fontWeight:"700"}}>
                    Code: fridaysale
                    </Text>
                </View>
                <Image source={require("../../Assits/Icon/Line.png")} style={{height:"98%",marginLeft:"20%"}}/>
                <View style={{justifyContent:"space-around",marginLeft:"3%"}}>

               
                <Text style={{color:"#777E90",fontSize:12}}>
                Exp
                </Text>
                <Text style={{fontSize:12}}>
                20
                </Text>
                <Text style={{fontSize:12}}>
                Dec
                </Text>
                </View>
                

                
                
            </View>
      
    </View>
  )
}