import React from 'react'
import { Text, SafeAreaView,StyleSheet, View, Pressable, Image, ScrollView } from 'react-native'

const InfoPacientes = ({ paciente, setModalPaciente, setPaciente }) => {
  return (
    <SafeAreaView
      style={styles.contenedor}
    >
        <Image source={require('../img/Bodega.jpeg')}
          style={styles.imagen}
        />
        <Text style={styles.titulo}>Informacion {''} 
          <Text style={styles.negritas}>del arrivo</Text></Text>
        
        <Pressable
            onPress={() => {
              setModalPaciente(false)
              setPaciente({})
            }}
            style={styles.btnCerrar}
          >
            <Text style={styles.textbtnCerrar}>X Cerrar</Text>
        </Pressable>

        <View
          style={styles.contenido}
        >
          <View style={styles.campo}>
            <Text style={styles.label}>Id del arrivo: </Text>
            <Text style={styles.tituloCont}>{paciente.paciente}</Text>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Numero de anden: </Text>
            <Text style={styles.tituloCont}>{paciente.propietario}</Text>
          </View>
        </View>

        <View style={styles.circulo}>
            <Text style={styles.Num}>3</Text>
            <Text style={styles.texto}>Horas de espera</Text>
            
        </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    contenedor:{
      backgroundColor: '#15303B',
      flex: 1,
      paddingBottom: 20
    },
    titulo: {
      paddingTop: 20,
      textAlign: 'center',
      fontSize: 35,
      color: '#FFF', 
      fontWeight: '600',
      marginTop: 30
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
    negritas: {
      fontWeight: '900'
    },
    imagen: {
      width: '100%',
      height: 250
    },
    btnCerrar: {
      marginVertical: 30,
      backgroundColor: '#234B5C',
      marginHorizontal:30,
      padding: 15,
      borderRadius: 50
    },
    textbtnCerrar: {
      color: '#FFF',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '900',
      textTransform: 'uppercase'
    },
    contenido:{
      backgroundColor: '#FFF',
      marginHorizontal: 30,
      borderRadius: 10,
      padding: 10,
      elevation: 7,
    },
    tituloCont: {
      color: '#171717',
      fontSize: 22,
      color: '#334155'
    },
    campo:{
      marginBottom: 10,
      paddingHorizontal: 7
    },
    label: {
      textTransform: 'uppercase',
      color: '#374151',
      fontWeight: '600',
      marginBottom: 5
    },
    circulo: {
      width: 400,
      height: 400,
      borderRadius: 500,
      backgroundColor: '#234B5C',
      marginTop: 20
    },
    Num: {
      fontSize: 60,
      textAlign: 'center'
    },
    texto: {
      fontSize: 30,
      textAlign: 'center'
    }
})

export default InfoPacientes
