import { View,Text,StyleSheet,Image,SafeAreaView,ScrollView,Modal,Button,TouchableHighlight,Alert} from "react-native";
import * as React from 'react';
import {Ionicons} from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from '../supabase';
import 'react-native-url-polyfill/auto';

export default function ProfileScreen({navigation}) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [image, setImage] = useState({});

  React.useEffect(() => {
const user = supabase.auth.user()
setemail(user.email)
  },[]);

  const editProfile = async () => {
    
    try {
      if (!profile) {
        
    const { data: post, error } = await supabase
      .from('profile')
      .insert([{ pname: username, paddress: useraddress, pphone: userphone, pemail:email, pabout:about}]);
    if (error) Alert.alert(error.message);
    else Alert.alert('Added post')

      } else {
    const { data: post, error } = await supabase
      .from('profile')
      .update([{ pname: username, paddress: useraddress, pphone: userphone, pemail:email, pabout:about}]).match({pemail: email});
    if (error) Alert.alert(error.message);
    else Alert.alert('Updated')
    getProfile();

      }

        // .update([{ pname: username, paddress: useraddress, pphone: userphone, pemail:email, pabout:about}]);
        // .match([{ pname: username, paddress: useraddress, pphone: userphone, pemail:email, pabout:about}]);
      
    let { error: uploadError } = await supabase.storage.from('foodle').upload('images', image);
    if (uploadError) Alert.alert('Upload error');

      

    } catch (e) {
      console.log(e);
    }
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
  }
  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
}
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
    
  };

  const [username, setusername] = useState('');
  const [useraddress, setuseraddress] = useState('');
  const [email, setemail] = useState('');
  const [userphone, setuserphone] = useState('');
  const [about, setabout] = useState('');
  const [profile, setProfile] = React.useState([]);

  const getProfile = async () => {
      const { data: profile, error } = await supabase
        .from('profile')
        .select('*')
        .eq('pemail', email);
      if (error) Alert.alert(error.message);
      else {
        setusername(profile[0].pname);
        setuseraddress(profile[0].paddress);
        setuserphone(profile[0].pphone);
        setabout(profile[0].pabout);
        setProfile(profile[0])
      };
  };

  React.useEffect(() => {
    getProfile();
  }, [email],[profile]);

    return (
      <ScrollView>
      <SafeAreaView key={profile.id} style={styles.container}>
      
                                    
       <View style={styles.container}>
       <View style={{flex:1,alignItems:'center'}}>
          <Image 
            style={styles.imagecontainer}
            source={require('../assets/ping.jpg')}/>
            <View>
              <TouchableOpacity onPress={toggleModalVisibility}>
                <Text>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={{flex:1,justifyContent:'flex-start',marginLeft:20}}>
          <View style={styles.texthead}>
            <Text style={styles.headtext}>
              Username
            </Text>
          </View> 
          <View style={styles.texthead}>
            <Text style={styles.texx}>
              {profile.pname}
            </Text>
          </View> 
          {/*----------------------------*/}
          <View style={styles.texthead}>
            <Text style={styles.headtext}>
              Address
            </Text>
          </View> 
          <View style={styles.texthead}>
            <Text style={styles.texx}>
              {profile.paddress}
            </Text>
          </View>
          {/*----------------------------*/}
          <View style={styles.texthead}>
            <Text style={styles.headtext}>
              Email
            </Text>
          </View> 
          <View style={styles.texthead}>
            <Text style={styles.texx}>
              {email}
            </Text>
          </View>
           {/*----------------------------*/}
           <View style={styles.texthead}>
            <Text style={styles.headtext}>
              Phone Number
            </Text>
          </View> 
          <View style={styles.texthead}>
            <Text style={styles.texx}>
              {profile.pphone}
            </Text>
          </View>
          {/*----------------------------*/}
          <View style={styles.texthead}>
            <Text style={styles.headtext}>
              About
            </Text>
          </View> 
          <View style={styles.texthead}>
            <Text style={styles.texx}>
              {profile.pabout}
            </Text>
          </View>
      
          <Modal animationType="slide" 
                   transparent visible={isModalVisible} 
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibility}>
                <View style={styles.viewWrapper}>
                 
                    <ScrollView style={styles.modalView}>
                    <View style={{marginTop:20,flex:-1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold'}}>Edit Profile</Text>
                  </View>
                      <TextInput
                        label="Username"
                        value={username}
                        onChangeText={text => setusername(text)}
                        style={styles.textInput}
                        activeUnderlineColor="#557c55"
                        />
                        
                          <TextInput
                              label="useraddress"
                              value={useraddress}
                              onChangeText={text => setuseraddress(text)}
                              style={{marginRight:40,width:'100%',backgroundColor:'#fff'}}
                              activeUnderlineColor="#557c55"

                          /> 
                          <TextInput
                              label="email"
                              value={email}
                              onChangeText={text => setemail(text)}
                              style={{marginRight:40,width:'100%',backgroundColor:'#fff'}}
                              activeUnderlineColor="#557c55"

                          /> 
                        
                        
                          <TextInput
                              label="Phone Number"
                              value={userphone}
                              onChangeText={text => setuserphone(text)}
                              style={{marginRight:40,width:'100%',backgroundColor:'#fff'}}
                              activeUnderlineColor="#557c55"

                          /> 
                          <TextInput
                              label="About"
                              value={about}
                              onChangeText={text => setabout(text)}
                              style={{marginRight:40,width:"100%",backgroundColor:'#fff'}}
                              activeUnderlineColor="#557c55"

                          /> 
                        
                        <View style={{marginTop:20,marginBottom:40}}>
          <TouchableHighlight underlayColor={'#fff'} style={{height:50,marginTop:10}} onPress={pickImage}>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
             
              <Ionicons  name="ios-images-outline" size={20} color={"#557C55"}/>
              <Text numberOfLines={1} style={{fontSize:15,marginLeft:5}}>Change Profile Image</Text>
            </View>
          </TouchableHighlight>

         
        </View>
                        
  
                        <View style={{flex:-1,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',marginRight:10}}>
                          <View style={{width:120}}>
                            <Button color="#557c55" title="Cancel" onPress={toggleModalVisibility} />
                          </View>
                          <View style={{width:120}}>
                            <Button color="#557c55" title="Save Changes" onPress={editProfile} />
                          </View>

                        </View>
                    </ScrollView>
                </View>
            </Modal>
          
        </View>
      </View> 
      </SafeAreaView>
      </ScrollView> 
    );
  
}
  const styles = StyleSheet.create({
    container:{
      marginTop:20,
      flex:10, 
      backgroundColor:'#fff'   
    },
    imagecontainer:{
      marginTop:50,
      width:150,
      height:150,
      borderRadius:100,
      marginBottom:10,
    },
    texthead:{
      alignItems:'flex-start',
      marginTop:10,
    },
    headtext:{
      fontWeight:'700'
    },
    texx:{
      borderWidth:1,
      padding:8,
      borderRadius:10,
      borderColor:'#C8C8C8',
      fontWeight:'500',
    },
    modalView: {
      width:400,
      flex:1, 
      top: "50%",
      left: "50%",
      elevation: 5,
      transform: [{ translateX: -200 }, 
                  { translateY: -150 }], 
      backgroundColor: "#fff",
      borderRadius: 7,
    },
    textInput: {
      width: "100%",
      borderRadius: 5, 
      marginBottom: 8,
      backgroundColor:'#fff',
    },
    viewWrapper: {

      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      marginLeft:20,
      marginRight:-5,
    },
  });
