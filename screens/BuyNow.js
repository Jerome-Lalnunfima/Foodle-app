
import { StyleSheet, Text,Alert, View,SafeAreaView,TouchableHighlight,KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import * as React from 'react';
import {useState} from 'react';
import { TextInput } from 'react-native-paper';
import {Ionicons} from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { Dropdown } from 'react-native-element-dropdown';

const dropDowndata = [
    { label: 'Aizawl', value: '1' },
    { label: 'Lunglei', value: '2' },
    { label: 'Champhai', value: '3' },
    { label: 'Kolasib', value: '4' },
    { label: 'Mamit', value: '5' },
    { label: 'Siaha', value: '6' },
    { label: 'Lawngtlai', value: '7' },
    { label: 'Khawzawl', value: '8' },
    { label: 'Hnahthial', value: '9' },


  ];
  


  

export default function BuyNow({navigation}) {


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
  const [name, setname] = useState('');
  const [address, setaddress] = useState('');
  const [pincode, setpincode] = useState('');
  const [phone, setphone] = useState('');
 
  const [landmark, setlandmark] = useState('');
  const pickImage = async () => {

      let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  }
  

  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:'#fff'}}>
      <View style={{flex:0,alignItems:'center',marginTop:30}}>
        <Text style={{fontWeight:'700',marginBottom:20}}>Details</Text>
      </View>
      <View style={{marginLeft:10,marginRight:10}}>
        <TextInput
        label="Name"
        value={name}
        onChangeText={text => setname(text)}
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
              label="pincode"
              value={pincode}
              onChangeText={text => setpincode(text)}
              style={{width:125,backgroundColor:'#fff'}}
              activeUnderlineColor="#557c55"

          /> 
        </View>
        <View style={{flex:-1,flexDirection:'column',marginTop:20}}>
          <TextInput
              label="Contact Number"
              value={phone}
              onChangeText={text => setphone(text)}
              style={{backgroundColor:'#fff'}}
              activeUnderlineColor="#557c55"

          /> 
          <TextInput
              label="Landmark"
              value={landmark}
              onChangeText={text => setlandmark(text)}
              style={{marginTop:20,backgroundColor:'#fff'}}
              activeUnderlineColor="#557c55"

          /> 
        </View>
        
        
        <View style={styles.buttview}>
                <TouchableHighlight
                style={styles.butt}
                underlayColor='#557C55'
                onPress={() => Alert.alert('Thinga')}
                >
                <Text style={styles.signinbutt}>Place Order</Text>  
                </TouchableHighlight> 
            </View>  
        
      </View>
    </KeyboardAvoidingView>



  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:45,
    marginLeft:10,
    backgroundColor: '#fff',
  },
  input:{
    marginTop:10,
    marginLeft:40,
  },
  buttview:{
    marginTop:100,
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
