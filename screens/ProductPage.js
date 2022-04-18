import { StyleSheet,TouchableHighlight, Text, View,Image,ScrollView,Alert,TouchableOpacity } from 'react-native';
import React from 'react';



export default function ProductPage({navigation, route}) {
  const {post, image,profile} = route.params;


  return (
    
      <View style={styles.container}>
        <ScrollView>
          <View style={{flex:-1,margin:30,marginLeft:40}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>
              {post.name}
            </Text>
          </View>
          <View style={styles.prodimgcon}>
            <Image       
              style={styles.prodimg}
              source={{uri: image}}/>
          </View>
          
          <View style={{flex:-1,alignItems:'center',marginTop:20}}>
            <Text style={{fontWeight:'bold',fontSize:17}}>
              ₹{post.price}
            </Text>
          </View>
          <View style={{marginTop:10}}>
          <Image       
              style={{width:'100%',height:10}}
              source={require('../assets/ree.jpg')}/>
          </View>
          <View style={{marginLeft:20,marginTop:20}}>
            <Text style={{fontWeight:'700'}}>Seller</Text>
          </View>
          <View style={{flex:-1,flexDirection:'row',alignItems:'center'}}>
            <View style={{marginLeft:20,marginTop:10}}>
              <Image       
                style={{width:40,height:40,borderRadius:50}}
                source={require('../assets/ping.jpg')}/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('SellerProfile')}>
              <Text style={{fontWeight:'700',marginLeft:10}}>{profile.pname}</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft:20,marginTop:20}}>
            <Text style={{fontWeight:'700'}}>Address</Text>
          </View>
          <View style={{flex:-1,flexDirection:'row',alignItems:'center',marginLeft:20,marginTop:10}}>
          
            <Text>{post.address}</Text>
          </View>
          <View style={{marginLeft:20,marginTop:20}}>
            <Text style={{fontWeight:'700'}}>Contact</Text>
          </View>
          <View style={{flex:-1,flexDirection:'row',alignItems:'center',marginLeft:20,marginTop:10}}>
          
            <Text>{post.phone}</Text>
          </View>
          <View style={{marginLeft:20,marginTop:20}}>
            <Text style={{fontWeight:'700'}}>Description</Text>
          </View>
          <View style={{flex:-1,flexDirection:'row',alignItems:'center',marginLeft:20,marginTop:10}}>
          
            <Text>{post.description}</Text>
          </View>
        </ScrollView>
        <View style={{flex:-1,marginTop:15,marginBottom:15,flexDirection:'row'}}>
          <View style={styles.hell}>
            <TouchableHighlight style={styles.button}
              underlayColor={'#81B581'}
              onPress={() => Alert.alert('Awle') }
            >
              <View>
                <Text style={{color:'white',fontSize:17,fontWeight:'700'}}>Add to Cart</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.hell}>
            <TouchableHighlight style={styles.button}
              underlayColor='#557C55'
              onPress={() => navigation.navigate('Buynow')}
            >
              <View >
                <Text style={{color:'white',fontSize:17,fontWeight:'700'}}>Buy Now</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>


      </View>
  
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  prodimgcon:{
    flex:-1,
    alignItems:'center',

  },
  prodimg:{
  
    width:'80%',
    height:200,
    borderRadius:15, 
  },
  button:{
    flex:-1,
    justifyContent:'center',
    alignItems:'center',
    width:160,
    height:50,
    borderRadius:10,
    backgroundColor:'#557c55',
  },
  hell:{
    marginLeft:25
  }
})