import { StyleSheet, Text, View,ScrollView,SafeAreaView,Image} from 'react-native'
import React from 'react'
import { supabase } from '../supabase';

export default function SellerProfile() {
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
  });
  return (
    <ScrollView>
      {profile.map((profile) => {
        return<SafeAreaView key={profile.id} style={styles.container}>                                    
         <View style={styles.container}>
         <View style={{flex:1,alignItems:'center'}}>
          <Image 
            style={styles.imagecontainer}
            source={require('../assets/ping.jpg')}/>
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
                        {profile.pemail}
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
                        
                  </View>
        </View> 

        </SafeAreaView>
      })}
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
})