import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,TouchableHighlight,Image,Modal,Dimensions,Button } from 'react-native';
import OrderListScreen from '../screens/OrderListScreen';
import * as React from 'react';
import {useState} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';

const dropDowndata = [
  { label: 'Pork', value: '1' },
  { label: 'Beef', value: '2' },
  { label: 'Beaverages', value: '3' },
  { label: 'Chicken', value: '4' },
  { label: 'Vegetables', value: '5' },
  { label: 'Rolls', value: '6' },
  { label: 'Others', value: '7' },
];

const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get("window");

  

export default function DashTab() {
  return (

      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:'#557c55',
        tabBarPressColor:'#557c55',
        tabBarIndicatorStyle:{backgroundColor:'#557c55'}
      }}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Order" component={OrderListScreen} />
      </Tab.Navigator>

  
  );
}
function DashboardScreen({navigation}){
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
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
    
  };

  const [prodname, setprodname] = useState('');
  const [address, setaddress] = useState('');
  const [price, setprice] = useState('');
  const [phone, setphone] = useState('');
  const [district, setdistrict] = useState('');

  return(
    <SafeAreaView style={{flex:1,marginTop:20,marginLeft:20}}>
      <ScrollView>
        <View style={{flex:1,flexDirection:'row',marginBottom:30}}>
          <TouchableHighlight underlayColor={'#E0FFE0'}  onPress={() =>navigation.navigate('Product')}>
                  <View style={styles.prodcontainer}>
                    <View style={styles.imgcontainer}>
                      <Image       
                        style={styles.prodimg}
                        source={require('../assets/item2.jpg')}/>
                    </View>
                    <View style={styles.detailscontainer}>
                            <Text>Erica Chow</Text>
                            <Text style={{fontWeight:'700'}}>Eric Thingpuidawr</Text>

                            <Text>Melthum, Aizawl</Text>
                            <Text style={{fontWeight:'700'}}>Rs. 199</Text>
                    </View>
                  </View>
          </TouchableHighlight>
          <View style={{flex:-1}}>
            <View style={styles.buttview}>
                  <TouchableHighlight
                  style={styles.butt}
                  underlayColor='#557C55'
                  onPress={toggleModalVisibility}
                  >
                  
                    <Text style={styles.signinbutt}>Edit</Text> 
                 
                  </TouchableHighlight> 
            </View>
            <Modal animationType="slide" 
                   transparent visible={isModalVisible} 
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibility}>
                <View style={styles.viewWrapper}>
                    <ScrollView style={styles.modalView}>
                      <TextInput
                        label="product name"
                        value={prodname}
                        onChangeText={text => setprodname(text)}
                        style={styles.textInput}
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
                        <View style={{paddingBottom:100}}>
                          <Dropdown
                              style={{margin: 16,
                                width:180,
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
  
                        <View style={{flex:-1,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',marginRight:10}}>
                          <View style={{width:120}}>
                            <Button color="#557c55" title="Cancel" onPress={toggleModalVisibility} />
                          </View>
                          <View style={{width:120}}>
                            <Button color="#557c55" title="Save Changes" onPress={toggleModalVisibility} />
                          </View>

                        </View>
                    </ScrollView>
                </View>
            </Modal>
            <View style={styles.buttview}>
                  <TouchableHighlight
                  style={styles.butt}
                  underlayColor='#557C55'
                  onPress={() => navigation.navigate('Cart')}
                  >
                  <Text style={styles.signinbutt}>Delete</Text>  
                  </TouchableHighlight> 
            </View>

          </View>

        </View>
        {/* ______ */}
        <View style={{flex:1,flexDirection:'row',marginBottom:30}}>
          <TouchableHighlight underlayColor={'#E0FFE0'}  onPress={() =>navigation.navigate('Product')}>
                  <View style={styles.prodcontainer}>
                    <View style={styles.imgcontainer}>
                      <Image       
                        style={styles.prodimg}
                        source={require('../assets/item2.jpg')}/>
                    </View>
                    <View style={styles.detailscontainer}>
                            <Text>Erica Chow</Text>
                            <Text style={{fontWeight:'700'}}>Eric Thingpuidawr</Text>

                            <Text>Melthum, Aizawl</Text>
                            <Text style={{fontWeight:'700'}}>Rs. 199</Text>
                    </View>
                  </View>
          </TouchableHighlight>
          <View style={{flex:-1}}>
            <View style={styles.buttview}>
                  <TouchableHighlight
                  style={styles.butt}
                  underlayColor='#557C55'
                  onPress={toggleModalVisibility}
                  >
                  
                    <Text style={styles.signinbutt}>Edit</Text> 
                 
                  </TouchableHighlight> 

            </View>
            <View style={styles.buttview}>
                  <TouchableHighlight
                  style={styles.butt}
                  underlayColor='#557C55'
                  onPress={() => navigation.navigate('Cart')}
                  >
                  <Text style={styles.signinbutt}>Delete</Text>  
                  </TouchableHighlight> 
            </View>

          </View>

        </View>
        {/* ______ */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prodcontainer:{
    flexDirection:'row',
    flex:-1,


  },
  prodimg:{
    width:120,
    height:120,
    borderRadius:10,
  },
  detailscontainer:{
    flex:-1,
    justifyContent:'space-evenly',
    marginLeft:20,
  },
  buttview:{
    marginTop:10,
},
butt:{
    marginLeft:40,

    flex:-1,

    alignItems:'center'   
},
signinbutt:{
    color:'white',
    backgroundColor:'#557C55',
    borderRadius: 6,
    width:70,
    height:40,
    paddingTop:10, 
    textAlign:'center'     
},
sv:{
  marginBottom:30
},
modalView: {
  flex:-1,

  top: "50%",
  left: "50%",
  elevation: 5,
  transform: [{ translateX: -200 }, 
              { translateY: -150 }],

  backgroundColor: "#fff",
  borderRadius: 7,
},
textInput: {
  width: "80%",
  borderRadius: 5,
 


  marginBottom: 8,
  backgroundColor:'#fff',
},
viewWrapper: {
  flex: 1,
  justifyContent:'center',
  alignItems:'center',
  marginLeft:20,
  marginRight:-5
},
});
