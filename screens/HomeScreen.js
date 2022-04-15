
import { StyleSheet, Text, View,Alert, TouchableOpacity,Image,TouchableHighlight,SafeAreaView,KeyboardAvoidingView } from 'react-native';
import * as React from 'react';
import { TextInput } from 'react-native-paper';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';




export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#fff" />

        
      <View style={styles.headercontainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons onPress={() =>navigation.openDrawer()} name="menu" size={35} color={"#557C55"}/>
        </TouchableOpacity>
          <View>
            <TextInput
                    style={styles.input}
                    placeholder="       search items..."   
            />
          </View>
       
        </View>
        
            <View style={{flex:-1,marginLeft:15,marginTop:10}}>
                      <Text style={{fontWeight:'700'}}>
                        Browse By Category.
                      </Text>
            </View>

                <View style={{flex:-1,flexDirection:'row',marginLeft:5}}>
                    <TouchableOpacity onPress={() =>navigation.navigate('Browse')}  style={styles.categorybox}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

                          <Image       
                              style={styles.iconimg}
                              source={require('../assets/ic/c1.png')}/>
                          <Text style={styles.catetext}>Chicken</Text>
                          </View> 
                    </TouchableOpacity>
                     
                    <TouchableOpacity onPress={() =>navigation.navigate('Browse')}  style={styles.categorybox}>
                      <View style={{flex:-1,justifyContent:'center',alignItems:'center',marginTop:17}}>
                        <Image       
                              style={styles.iconimg}
                              source={require('../assets/ic/b2.png')}/>
                        <Text style={styles.catetext}>Beef</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>navigation.navigate('Browse')}  style={styles.categorybox}>
                    
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image       
                              style={styles.iconimg}
                              source={require('../assets/ic/e1.png')}/>
                        <Text style={styles.catetext}>Pork</Text>
                      </View> 
                    </TouchableOpacity>                   

                    </View>
                    <View style={{flex:-1,paddingLeft:5,flexDirection:'row',marginTop:10}}>
                    <TouchableOpacity onPress={() =>navigation.navigate('Browse')}  style={styles.categorybox}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image       
                              style={styles.iconimg}
                              source={require('../assets/ic/d1.png')}/>
                        <Text style={styles.catetext}>Vegetables</Text>
                      </View> 
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>navigation.navigate('Browse')}  style={styles.categorybox}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image       
                              style={styles.iconimg}
                              source={require('../assets/ic/f1.png')}/>
                        <Text style={styles.catetext}>Rolls</Text>
                      </View>
                    
                      
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>navigation.navigate('Browse')}  style={styles.categorybox}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image       
                              style={styles.iconimg}
                              source={require('../assets/ic/a.png')}/>
                        <Text style={styles.catetext}>Beverages</Text>
                      </View> 
                    </TouchableOpacity>
                    
                    </View>
          {/* ============================================================== */}
          <View style={{flex:-1,marginTop:20}}>
                <View style={{marginLeft:15}}>
                  <Text style={{fontWeight:'700'}}>
                    Recent Posts.
                  </Text>
                </View>

                <View style={{flex:-1,flexDirection:'row'}}>         
                   <Image 
                      style={styles.imagecontainer}
                      source={require('../assets/item1.jpg')}/>
                    <Image 
                    style={styles.imagecontainer}
                    source={require('../assets/item2.jpg')}/>
                    <Image 
                    style={styles.imagecontainer}
                    source={require('../assets/item3.jpg')}/>

                  <View style={styles.buttview}>
                      <TouchableHighlight
                      style={styles.butt}
                      underlayColor='#557C55'
                      onPress={() => Alert.alert('Thinga')}
                      >
                      <Text style={styles.signinbutt}>View more{'>'}</Text>  
                      </TouchableHighlight> 
                  </View>
                                  
                </View>

          <View style={{marginTop:20}}>
                <View style={{marginLeft:15}}>
                  <Text style={{fontWeight:'700'}}>
                    Top selling.
                  </Text>
                </View>

                <View style={{flex:1,flexDirection:'row'}}>         
                   <Image 
                      style={styles.imagecontainer}
                      source={require('../assets/item1.jpg')}/>
                    <Image 
                    style={styles.imagecontainer}
                    source={require('../assets/item2.jpg')}/>
                    <Image 
                    style={styles.imagecontainer}
                    source={require('../assets/item3.jpg')}/>

                  <View style={styles.buttview}>
                      <TouchableHighlight
                      style={styles.butt}
                      underlayColor='#557C55'
                      onPress={() => Alert.alert('Thinga')}
                      >
                      <Text style={styles.signinbutt}>View more{'>'}</Text>  
                      </TouchableHighlight> 
                  </View>
          </View>                          
                </View>

        </View>
        
        


    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    marginLeft:1,
    flex: 1,
    paddingTop:50,


  },
  headercontainer:{
    marginLeft:15,
    flex:-1,
    flexDirection:'row',
    backgroundColor:'#fff',
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
    borderTopLeftRadius:10,
    borderTopRightRadius:10,

  },
  signinbutt:{
    color:'white',
    backgroundColor:'#557C55',
    borderRadius: 6,

    fontSize:12,
    width:50,
    height:40,

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
  butt:{
    height:40,
    width:50,
    marginTop:35,
    marginLeft:10,
  }

});
