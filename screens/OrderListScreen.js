
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import * as React from 'react';
import {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function NotiScreen({navigation}) {
  const [order,setOrder] = useState([
    {name:'order 1',key:'1'},
    {name:'order 2',key:'2'},
    {name:'order 3',key:'3'},
    {name:'order 4',key:'4'},
    {name:'order 5',key:'5'},
    {name:'order 6',key:'6'},

  ])
  return (
  
      <View style={styles.container}>
        <View style={{marginBottom:30,marginTop:20,marginLeft:20}}>
          <Text style={{fontWeight:'bold'}}>Order Lists</Text>
        </View>
          {/* <FlatList
            data={order}
            renderItem={({ item }) => ( */}
            <TouchableOpacity onPress={()=>navigation.navigate('Orders')}>

                <View style={styles.view}>
                  <View>
                    <Text style={styles.item}>
                     Order ID : 787654
                    </Text>
                    <Text>
                       12/03/2022, 1:00 PM
                    </Text>
                    <View style={{marginTop:10}}>
                      <Text style={{fontWeight:'700'}}>Laleric-a, Aizawl</Text>
                    </View>
                  </View>

                  
                  <View style={{flex:-1,justifyContent:'center',alignItems:'center'}}>
                    <Image
                          style={styles.prodimg}
                          source={require('../assets/item1.jpg')} />
                    <Text style={{fontWeight:'bold'}}>Eric's chow</Text>
                  </View>
            </View>
            </TouchableOpacity> 

            {/* )} */}
            {/* />    */}
       </View>  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  item:{


    fontWeight:'700'
  },
  view:{
    backgroundColor:'#dadada',
    marginBottom:20,
    flex:-1,
    justifyContent:'space-around',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    flexDirection:'row'
  },
  prodimg:{
    width:60,
    height:60,
    borderRadius:10,
  },
  
});
