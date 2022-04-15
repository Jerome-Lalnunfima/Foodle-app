
import { View, Text,StyleSheet,Image,TextInput,TouchableOpacity,TouchableHighlight,Alert,KeyboardAvoidingView} from 'react-native';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/user';
import { supabase } from '../supabase';



function LoginScreen({navigation}){    
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const dispatch = useDispatch();
    
    const handleLogin = async () => {
        const { user, error } = await supabase.auth.signIn({
            email: Email,
            password: Password,
        })

        if (error) Alert.alert(error.message);
        else Alert.alert('Signed in');
    }
  
    return (
        
        
        <KeyboardAvoidingView style={styles.container}>
            <Image
                style={styles.stretch}
                source={require('../assets/loginlogop.png')}
            />
            <TextInput
                style={styles.input}
                onChangeText={text=>setEmail(text)}
                value={Email}
                placeholder="       enter your email..."   
            />
            <TextInput
                style={styles.input2}
                value={Password}
                onChangeText={text=>setPassword(text)}
                secureTextEntry={true}
                placeholder="       password.."   
            />
            <TouchableOpacity style={{marginLeft:170,marginTop:10,marginBottom:10}}>
                <Text style={{color:'#005BC6'}}>
                    Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.buttview}>
                <TouchableHighlight
                style={styles.butt}
                underlayColor='#557C55'
                onPress={handleLogin}
                >
                <Text style={styles.signinbutt}>Sign In</Text>  
                </TouchableHighlight> 
            </View>
            <View>
                <Text style={{marginTop:10}}>
                    Or
                </Text>
            </View>
            <View style={styles.buttview}>
                <TouchableHighlight
                style={styles.butt}
                underlayColor='#557C55'
                onPress={() => navigation.navigate('Signup')}
                >
                <Text style={styles.signinbutt}>Sign Up</Text>  
                </TouchableHighlight> 
            </View>             
      </KeyboardAvoidingView>
    );
}
  const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 40,
        alignItems:'center',
    },
    stretch: {
        justifyContent:'center',
    },
    input:{
        height: 40,
        width: 300,
        margin: 12,
        marginTop:50,
        borderWidth: 1,
        padding: 10,
        borderRadius:7,
    },
    input2:{
        height: 40,
        width: 300,
        margin: 12,
        marginTop:30,
        borderWidth: 1,
        padding: 10,
        borderRadius:7,
    },
    buttview:{
        marginTop:10,
    },
    butt:{
        marginRight:40,
        marginLeft:40,    
    },
    signinbutt:{
        color:'white',
        backgroundColor:'#557C55',
        borderRadius: 6,
        width:250,
        height:40,
        textAlign:'center',
        paddingTop:10,      
    },

  });

  export default LoginScreen;