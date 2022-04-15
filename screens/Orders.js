import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Orders() {
  return (
    <View style={{flex:-1,backgroundColor:'#dadada'}}>
      <View style={styles.view}>
                  <View>
                    <Text style={styles.item}>
                     Order ID : 787654
                    </Text>
                    <Text>
                       12/03/2022, 1:00 PM
                    </Text>
                    <View style={{marginTop:10}}>
                      <Text style={{fontWeight:'700'}}>Laleric-a, Aizawl</Text>
                    </View>
                  </View>

                  
                  <View style={{flex:-1,justifyContent:'center',alignItems:'center'}}>
                    <Image
                          style={styles.prodimg}
                          source={require('../assets/item1.jpg')} />
                    <Text style={{fontWeight:'bold'}}>Eric's chow</Text>
                  </View>
                  
        </View>
                  <View style={{flex:-1}}>
                    <Text style={{marginTop:10,marginLeft:5}}>
                      Name: Lalrochani
                    </Text>
                    <Text style={{marginTop:10,marginLeft:5}}>
                       Address : Bawngkawn, Aizawl
                    </Text>
                    <Text style={{marginTop:10,marginLeft:5}}>
                       Phone : 9098787656
                    </Text>
                    <Text style={{marginTop:10,marginLeft:5}}>
                        Pin code : 796006
                    </Text>
                    <Text style={{marginTop:10,marginLeft:5}}>
                        Landmark : Near Brigade Field
                    </Text>
                  </View>
    </View>
  );
}

const styles = StyleSheet.create({
    view:{
        marginBottom:20,
        flex:-1,
        justifyContent:'space-around',

        borderRadius: 5,
       
        flexDirection:'row'
      },
      prodimg:{
        width:60,
        height:60,
        borderRadius:10,
      },
})