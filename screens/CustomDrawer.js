import { Text, View,Image, TouchableHighlight} from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/user';
import { supabase } from '../supabase';
import 'react-native-url-polyfill/auto'


export default function CustomDrawer(props) {

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) Alert.alert(error.message);
    else Alert.alert('Signed out');
}

 
  const [profile, setProfile] = React.useState([]);
  const [pimage, setpimage] = useState(null);

  React.useEffect(() => {
    const user = supabase.auth.user();
const { publicURL, error:e } = supabase
  .storage
  .from('foodle')
  .getPublicUrl(`pimages/${user.id}`)
  if (!e) setpimage(publicURL);
  }, []);

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
  });
  

  return (  
     <View style={{flex:1,justifyContent:'center'}}>
       <DrawerContentScrollView {...props}>
       {profile.map((profile) => {
       return<View key={profile.id} style={{flex:1,justifyContent:'center',alignItems:'center',marginBottom:30,marginTop:30}}>
            <Image style={{height:80,width:80,borderRadius:40,}}source={{uri: pimage}} />
            <Text>{profile.pname}</Text>
          </View>
       })}
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
      <View style={{flex:-1,alignItems:'center',marginBottom:20}}>
            <TouchableHighlight
              onPress={handleLogout} 
              underlayColor='#fff'
            >
              <Text>Sign Out</Text>  
            </TouchableHighlight>
      </View>
      
   
    </View> 
    
  );
}
