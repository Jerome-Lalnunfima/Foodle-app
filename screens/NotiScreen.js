
import { StyleSheet, Text, View,Alert, TouchableOpacity,Image,TouchableHighlight } from 'react-native';
import * as React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';


export default function NotiScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text> HELLO</Text>
      </View>     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',

  },
  headercontainer:{
    flex:1,
    flexDirection:'row'
  },
  input:{
    width: 270,
    height:15,
    backgroundColor:'#fff',
    borderColor:'#C4C4C4',
    marginLeft:10,
    marginRight:10,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,

  },
  signinbutt:{
    color:'white',
    backgroundColor:'#557C55',
    borderRadius: 6,
    marginLeft:10,
    fontSize:12,
    width:50,
    height:40,
    marginTop:35,
    textAlign:'center',
    paddingTop:4,
      
},
  imagecontainer:{
      borderRadius:10,
      marginLeft:15,
      marginTop: 15,
      marginRight:10,
      width:80,
      height:80,
  },
  categorybox:{
    backgroundColor:'#557C55',
    height:100,
    width:100,
    borderRadius:10,
    marginLeft:15,
    marginTop: 15,
    marginRight:10,
  },
  iconimg:{
    marginBottom:10,

  },
  catetext:{
    fontWeight:'700',
    color:'white', 

},
});
