import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
interface proptype {
  title?: any;
  onchange?: Function;

}

export default function         Textinput(props: proptype) {
  const {title, onchange} = props;
  return (
    <TextInput
    style={{
      width: '90%',
      height: 40,
      justifyContent: 'center',
      alignSelf: 'center',
      borderBottomWidth: 1,
      marginTop:"10%",
      

    }}
    
    placeholder={title} placeholderTextColor={"black"}></TextInput>                            
  );
}
