import { StyleSheet,Button, Text, View,Alert, TouchableOpacity,Image,TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as React from 'react';
import {useState} from 'react';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '../supabase';
import 'react-native-url-polyfill/auto'

export default function BrowseScreen({navigation,route}) {
  const [posts, setPosts] = React.useState([]);
  const [images, setImages] = React.useState({});
  const [profile, setProfile] = React.useState([]);



  React.useEffect(() => {
    (
      async () => {
      const { data: profile, error } = await supabase
        .from('profile')
        .select('*')
        .order('id', { ascending: false });
      if (error) Alert.alert(error.message);
      else setProfile(profile);
      }
    )()
  }, []);
 

  React.useEffect(() => {
    (
      async () => {
      const { data: posts, error } = await supabase
        .from('posts')
        .select(`*, users (*)`)
        .order('id', { ascending: false });
      if (error) Alert.alert(error.message);
      else setPosts(posts);
      }
    )()
  });

  React.useEffect(() => {

    posts.forEach((post) => {
const { publicURL, error:e } = supabase
  .storage
  .from('foodle')
  .getPublicUrl(post.image ? post.image.replace('foodle/', '') : '')
  if (!e) setImages(images => ({...images, [post.id]: publicURL}));

    });
  }, [posts]);

  return (
    <SafeAreaView style={styles.container}>
     
      <View >
        
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
            
<ScrollView>
            <View style={{flex:1,marginTop:30}}>
              {posts.map((post) => {
                return <TouchableHighlight key={post.id} underlayColor={'#E0FFE0'} onPress={() => navigation.navigate('Product', {post, image: images[post.id]})}>
                  <View style={styles.prodcontainer}>
                    <View style={styles.imgcontainer}>
                      <Image
                      resizeMode='cover'
                        style={styles.prodimg}
                        source={{uri: images[post.id]}} />
                    </View>
                    <View style={styles.detailscontainer}>
                      <Text>{post.name}</Text>
                     
                      <View  style={{ flex: -1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.avatarimg}
                          source={require('../assets/ping.jpg')}
                        />
                        {/* <Text style={{ fontWeight: '700', marginLeft: 5 }}>{profile.filter(p => p.id === post.user_id)[0].pname}</Text> */}
                      </View>

                      <Text>{post.address}</Text>
                      <Text style={{ fontWeight: '700' }}>Rs. {post.price}</Text>
                    </View>
                  </View>
                </TouchableHighlight>

              })}
          
            </View>
</ScrollView>

              
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    paddingLeft:20,
    flex: 1

  },
  headercontainer:{
    shadowColor:'#454d65',
    shadowOffset:{height:5},
    shadowRadius:15,
    shadowOpacity:0.3,
    flex:-2,
    flexDirection:'row',
    paddingBottom:20,
  },
  avatarimg:{
    width:25,
    height:25,
    borderRadius:50
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
  prodcontainer:{
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
  }

});
