import { StyleSheet, Text, View } from 'react-native';
import { TextInput,Button,HelperText} from 'react-native-paper';
export default function Register() {
  return (
    <View style={styles.container}>
        <TextInput label='Email' style={styles.TextInput} mode='outlined'outlineColor='black' activeOutlineColor='#9E7676'/>
        <HelperText></HelperText>

        <TextInput label='Password' style={styles.TextInput} mode='outlined' outlineColor='black' activeOutlineColor='#9E7676'/>
        <HelperText></HelperText>

        <TextInput label='Confirm Password' style={styles.TextInput} mode='outlined' outlineColor='black' activeOutlineColor='#9E7676'/>
        <HelperText></HelperText>

        <Button style={styles.button}mode='contained'>Register</Button>

    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FFF8EA'
  },
  button:{
    width:200,
    height:40,

  }
});
