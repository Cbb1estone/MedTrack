import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Pressable,
    TouchableOpacity, 
    Image
  } from 'react-native';

const Informacion = ({setIdentificado}) => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePressImage = () => {
    setIsPasswordVisible(true);
    setTimeout(() => {
      setIsPasswordVisible(false);
    }, 2000); // Cambia la visibilidad después de 2 segundos
  };
  
  return (
    <View style={styles.Padre}>

       <View style={styles.banner}>
          <Text style={styles.bannerText}>+ MEDTRACK</Text>
        </View>

      <Text style={styles.titulo}>Inicio de sesion</Text>

      <View style={styles.campo}>
          <Text style={styles.preguntas}>Correo: </Text>
          <TextInput
            style={styles.input}
            placeholder='Ejemplo@gmail.com'
            placeholderTextColor={'#666'}
          />
      </View>
      <View style={styles.campo}>
        <Text style={styles.preguntas}>Contraseña: </Text>
        <View style={styles.inputcontraseña}>
          <TextInput
            style={styles.contraseña}
            placeholder='Introduce tu contraseña'
            placeholderTextColor={'#666'}
            secureTextEntry={!isPasswordVisible} // Oculta la contraseña a menos que isPasswordVisible sea true
            value={password}
            onChangeText={setPassword}
          />
          <Pressable onPress={handlePressImage} style={styles.presscontra}>
            <Image
              style={styles.imagen}
              source={require('../img/Ojo.png')}
            />
          </Pressable>
        </View>
      </View>
      <Pressable
      onPress={() => setIdentificado(false)}
      style={styles.btnEnviar}>
        <Text style={styles.btnEnviarText}>Ingresar</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  Padre: {
    backgroundColor: '#f4f0ea',
    flex: 1
  },
  titulo: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 40,
    color: '#000000', 
    fontWeight: '600'
  },
  banner: {
    backgroundColor: '#832603',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10, // Ajuste para separar el banner del título
},
bannerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight:'800'
},

   campo: {
    marginTop: 10,
    marginHorizontal: 30,
    paddingBottom: 10,
  },
  preguntas: {
    color: '#832603',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 15,
    fontWeight: '900'
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    color:'#832603'
  },
  contraseña: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    color:'#832603',
    flex: 1
  },
  inputcontraseña: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    color:'#832603',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  btnEnviar: {
    marginTop: 50,
    marginHorizontal: 30,
    backgroundColor: '#757e2b',
    padding: 15,
    borderRadius: 50
  },
  btnEnviarText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: '700'
  },
  btnRegistro: {
    padding: 20,
    marginTop: 10
  },
  brnRegistroTxt:{
    color: '#4C7E93',
    textAlign: 'center'
  },
  imagen: {
    height: 45,
    width: 45
  
  },

})

export default Informacion
