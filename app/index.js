
import { useState } from 'react';
import { View,StyleSheet, Pressable } from 'react-native';
import { TextInput ,Button, HelperText, Text,Portal,Modal} from 'react-native-paper';
import { Link } from 'expo-router';
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  
  const hasError=()=>{
    if(!email.includes('@')){
      setError('Invalid Email Format')
    }
    else{
      setError('')
    }
  };
  
  const handleLogIn=()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      const user = userCredential(user);
      console.log(user);
      console.log('log in succesfully')
    })
    .catch((error) => {
      hasError(error)
    }); 
      
  }

  
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.TextInput}
      label='Email'
      mode='outlined'
      value={email}
      onChangeText={text => {setEmail(text); hasError()}}
      outlineColor='black'
      activeOutlineColor='purple'
      placeholder='example@email.com'
     
      />
        
      
      <HelperText type='error' visible={error}>{error}</HelperText>
      <TextInput
      label='Password'
      mode='outlined'
      value={password}
      onChangeText={text => setPassword(text)}
      secureTextEntry
      right={<TextInput.Icon icon="eye"/>}
      outlineColor='black'
      activeOutlineColor='purple'
      style={styles.TextInput}
      
      />
      <HelperText type='error'> </HelperText>
      <Button style={styles.button} buttonColor="purple" mode="elevated"  textColor='white' onPress={handleLogIn()}>Login</Button>
      <Link href='/register' >
      <Pressable>
        <Text style={styles.Text}>Don't have an account? Register</Text>
      </Pressable>
      </Link>
      
    
     
       
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
       backgroundColor:'#FFF8EA'
  },
  button: {
    width:250,
    height: 40,
    marginTop:10,
  },
  TextInput: {
    width:250,
    backgroundColor:'white'
  },
  
  registerModal: {
  width:500,
  height:500,
  backgroundColor:'white',
  padding:50,
  
  
    borderRadius: 10,
    elevation: 5,
 marginTop:50,
    
  },
  Text: {

  }
});
