
import { StyleSheet, Text,Alert, View,StatusBar,TouchableHighlight,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import * as React from 'react';
import {useState} from 'react';
import { TextInput } from 'react-native-paper';
import {Ionicons} from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { Dropdown } from 'react-native-element-dropdown';
import { supabase } from '../supabase';
import 'react-native-url-polyfill/auto';
import {decode} from 'base64-arraybuffer'
const dropDowndata = [
  { label: 'Pork', value: 'pork' },
  { label: 'Beef', value: 'beef' },
  { label: 'Beaverages', value: 'beverages' },
  { label: 'Chicken', value: 'chicken' },
  { label: 'Vegetables', value: 'vegetables' },
  { label: 'Rolls', value: 'rolls' },
  { label: 'Others', value: 'others' },
];

  

export default function PostScreen({navigation}) {


  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
  }
 

  const [prodname, setprodname] = useState('');
  const [address, setaddress] = useState('');
  const [price, setprice] = useState('');
  const [phone, setphone] = useState('');
  const [district, setdistrict] = useState('');
  const [description, setdescription] = useState('');
  const [image, setimage] = useState({});
  const user = supabase.auth.user();

  const uploadPost = async () => {
    try {
      let { data, error: uploadError } = await supabase.storage.from('foodle').upload(`images/${Math.random().toString().substr(2, 8)}`, decode(image.base64), {
      contentType: 'image/jpg',
    });
    const { data: post, error } = await supabase
      .from('posts')
        .insert([{ name: prodname, address: address, price: price, phone: phone, district: district, category: value,description:description, image: data.Key, user_id: user.id}]);
      
    if (uploadError) Alert.alert(uploadError.message);

      
    if (error) Alert.alert(error.message);
    else Alert.alert('Added post')

    } catch (e) {
      console.log(e);
    }
  };





  const pickImage = async () => {

      let result = await ImagePicker.launchImageLibraryAsync({
        base64: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setimage(result);
  }
  

  return (
    
    <View style={{flex:1,backgroundColor:'#fff',marginTop:40}}>
      <StatusBar style="auto" backgroundColor="#fff" />

      <View style={{flex:-1,}}>
          <TouchableOpacity>
            <Ionicons onPress={() =>navigation.openDrawer()} name="menu" size={35} color={"#557C55"}/>
          </TouchableOpacity>
      </View>
      <View style={{flex:0,alignItems:'center'}}>
        <Text style={{fontWeight:'700',marginBottom:20}}>Post your Product</Text>
      </View>
      <View style={{marginLeft:10,marginRight:10}}>
        <TextInput
        label="product name"
        value={prodname}
        onChangeText={text => setprodname(text)}
        style={{backgroundColor:'#fff'}}
        activeUnderlineColor="#557c55"

        /> 
        <View style={{flex:-1,flexDirection:'row',marginTop:20}}>
          <TextInput
              label="address"
              value={address}
              onChangeText={text => setaddress(text)}
              style={{marginRight:40,width:200,backgroundColor:'#fff'}}
              activeUnderlineColor="#557c55"

          /> 
          <TextInput
              label="price"
              value={price}
              onChangeText={text => setprice(text)}
              style={{marginRight:40,width:120,backgroundColor:'#fff'}}
              activeUnderlineColor="#557c55"

          /> 
        </View>
        <View style={{flex:-1,flexDirection:'row',marginTop:20}}>
          <TextInput
              label="Contact Number"
              value={phone}
              onChangeText={text => setphone(text)}
              style={{marginRight:40,width:200,backgroundColor:'#fff'}}
              activeUnderlineColor="#557c55"

          /> 
          <TextInput
              label="District"
              value={district}
              onChangeText={text => setdistrict(text)}
              style={{marginRight:40,width:120,backgroundColor:'#fff'}}
              activeUnderlineColor="#557c55"
          /> 
        </View>
        <TextInput
              label="description"
              value={description}
              onChangeText={text => setdescription(text)}
              style={{marginRight:40,width:360,backgroundColor:'#fff'}}
              activeUnderlineColor="#557c55"
          /> 
        <View>
          <Dropdown
              style={{margin: 16,
                height: 50,
                color:'red',
                borderBottomColor: 'gray',
                borderBottomWidth: 0.5,}}
               
              data={dropDowndata}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Category"
              searchPlaceholder="Search..."
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
              
         />
          </View>
        <View style={{marginLeft:110,marginTop:20}}>
          <TouchableHighlight underlayColor={'#fff'} style={{height:50,width:150,marginTop:30}} onPress={pickImage}>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
             
              <Ionicons  name="ios-images-outline" size={20} color={"#557C55"}/>
              <Text style={{fontSize:15,marginLeft:5}}>Upload Image</Text>
            </View>
          </TouchableHighlight>

         
        </View>
        <View style={styles.buttview}>
                <TouchableHighlight
                style={styles.butt}
                underlayColor='#557C55'
                onPress={() => uploadPost()}
                >
                <Text style={styles.signinbutt}>Post</Text>  
                </TouchableHighlight> 
            </View>  
        
      </View>
    </View>



  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    marginLeft:10,
    backgroundColor: '#fff',
  },
  input:{
    marginTop:10,
    marginLeft:40,
  },
  buttview:{
    marginTop:40,
    flex:-1,
    justifyContent:'center',
    alignItems:'center'
  },
  
  signinbutt:{
    
    color:'white',
    backgroundColor:'#557C55',
    borderRadius: 6,
    width:150,
    height:40,
    textAlign:'center',
    paddingTop:10,  
  },
  butt:{
    width:150,
    height:40,
  }
});
