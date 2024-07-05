import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from 'expo-router';
export default function Index() {
  return (
    <View
    style ={{
      flex: 1, 
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: '#F2F2F2'
    }}
    >
    
    <Image 
    style={{width: '100%', height: 300}}
    source={require('../assets/images/cabelo.jpg')}/>
        
        <Link href="/products" style={styles.button} asChild>
        <TouchableOpacity >

          <Text style={styles.buttonText}>
            Acessar Restaurante Sp
          </Text>

        </TouchableOpacity>
      </Link>

      <Text
        style={{fontWeight: 'bold',marginTop: 20 , fontSize: 20,textAlign:'center'}}
      >Bem-Vindo!
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({

  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 20,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,

  },
  buttonText: {
    fontSize: 18,
    color: '#010101',
    fontWeight: 'bold',
  },
});

{/* flex é importante*/}