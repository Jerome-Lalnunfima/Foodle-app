
import React,{useState} from 'react';

import { View, Text,StyleSheet,Image,TextInput,KeyboardAvoidingView,TouchableHighlight,Alert,} from 'react-native';
import { supabase } from '../supabase';

function SignupScreen({navigation}){    
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const handleSignUp = async () => {
        const { user, error } = await supabase.auth.signUp({
            email: Email,
            password: Password,
        })

        if (error) Alert.alert(error.message)
        else Alert.alert('Signed up succesfully.');
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
            <TextInput
                style={styles.input2}
                value={Password}
                onChangeText={text=>setPassword(text)}
                secureTextEntry={true}
                placeholder="       confirm password.."   
            />
            <TouchableHighlight onPress={handleSignUp}><Text>Sign up</Text></TouchableHighlight>
    
           
          
               
      </KeyboardAvoidingView>
    );

}

  const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 60,
        alignItems:'center',
    },
    stretch: {
        justifyContent:'center',
    },
    input:{
        height: 40,
        width: 300,
        margin: 12,
        marginTop:20,
        borderWidth: 1,
        padding: 10,
        borderRadius:7,
    },
    input2:{
        height: 40,
        width: 300,
        margin: 12,
        marginTop:20,
        borderWidth: 1,
        padding: 10,
        borderRadius:7,
    },
    buttview:{
        marginTop:30,
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

  export default SignupScreen;