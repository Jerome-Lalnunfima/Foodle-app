import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image,Button,Alert,TouchableOpacity} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function CartScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
       <View style={{flex:1,marginTop:30}}>
               
                  <View style={styles.prodcontainer}>
                    <View style={styles.imgcontainer}>
                      <Image       
                        style={styles.prodimg}
                        source={require('../assets/item1.jpg')}/>
                    </View>
                          <View style={{flex:-1,flexDirection:'row',alignItems:'center'}}>
                            <View>
                              <View style={styles.detailscontainer}>
                                    <Text>Rochana-i Chana</Text>
                                    
                                <View style={{flex:-1,flexDirection:'row',alignItems:'center'}}>
                                      <Image style={styles.avatarimg}
                                          source={require('../assets/ping.jpg')}
                                          />
                                      <Text style={{fontWeight:'700',marginLeft:5}}>Rochani Dawr</Text>
                                </View>
                                      <Text>Dawrpui, Aizawl</Text>
                                      <Text style={{fontWeight:'700'}}>Rs. 999</Text>
                              </View> 
                            </View> 
                            <View style={{marginLeft:35}}>
                              <Button onPress={() => Alert.alert('Thinga')}
                                      style={styles.butt}
                                      title="Remove"
                                      color="#557c55" />
                            </View>  
                          </View>
                    </View>
                    {/* =========== */}
        </View>   
      </ScrollView>
                            <View style={{flex:2}}>
                              <View style={{width:"100%",height:20,backgroundColor:'#eaeaea'}}>
                              </View>
                              <View style={{marginTop:10,marginLeft:10}}>
                                <Text style={{fontWeight:'bold'}}>Price Details</Text>
                              </View>
                              <View style={{marginLeft:10,marginRight:10,marginTop:20,flex:-1,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text>Total Price</Text>
                                <Text>₹ 999</Text>
                              </View>
                              <View style={{marginLeft:10,marginRight:10,marginTop:20,flex:-1,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text>Delivery Charge</Text>
                                <Text>₹ 199</Text>
                              </View>
                              <View style={{marginLeft:10,marginRight:10,marginTop:20,flex:-1,flexDirection:'row',justifyContent:'space-between'}}>
                                <Text>Total</Text>
                                <Text>₹ 1198</Text>
                              </View>
                              <View style={styles.button}>
                              <TouchableOpacity onPress={() => navigation.navigate('Buynow')}>
                                <View style={{flex:-1,backgroundColor:'#557c55',width:300,borderRadius:10,
                                 height:50,justifyContent:'center'}}>
                                  <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}>
                                    Buy Now
                                  </Text>
                                </View>
                              </TouchableOpacity>
                                   
                                      
                              </View>

                            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
  },
  prodcontainer:{
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#eaeaea',
    flexDirection:'row',
    flex:-1,
    marginBottom:30,

  },
  prodimg:{
    width:120,
    height:120,
    borderRadius:10,
  },
  detailscontainer:{
    flex:1,
    justifyContent:'space-evenly',
    marginLeft:20,
  },
  avatarimg:{
    width:25,
    height:25,
    borderRadius:50
  },
  button:{

    marginTop:40, 
    flex:-1,
    justifyContent:'center',
    alignItems:'center'
  }

});
