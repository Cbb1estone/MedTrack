import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  Alert,
  Modal
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InfoPacientes from './src/components/InfoPacientes';
import Informacion from './src/components/Informacion';


const App = () => {

  const [modalVisible, setModalVisible ] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [modaPaciente, setModalPaciente] = useState(false);
  const [identificado, setIdentificado] = useState(true);

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id )
    setPaciente(pacienteEditar[0])
  }

  const pacienteEliminar = id => {
    Alert.alert(
      'Deseas ELIMINAR esta consulta?',
      'Se eliminara permanentemente... ',
      [
        {text: 'Cancelar'},
        {text: 'Eliminar', onPress: () => {
          const pacientesActualizados = pacientes.filter(
            pacientesSatate => pacientesSatate.id !== id
          )

          setPacientes(pacientesActualizados)
        }}
      ]
    )
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>+ MEDTRACK</Text>
      </View>
      <Modal
        visible={identificado}
        animationType='slide'
      >
        <Informacion 
          setIdentificado={setIdentificado}/>
      </Modal>
      <View style={styles.redBackground}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Tu próxima dosis es a las x:xx</Text>
        </View>
      </View>
      
      <Pressable
        onPressIn={() => setModalVisible(!modalVisible)}
        style={styles.button}>
        <Text style={styles.buttonText}>Calendario</Text>
      </Pressable>
  
      <Pressable
        onPressIn={() => setModalVisible(!modalVisible)}
        style={styles.button}>
        <Text style={styles.buttonText}>Planeacion</Text>
      </Pressable>
  
      {modalVisible && (
        <Formulario
          modalVisible = {modalVisible}
          setModalVisible={setModalVisible}
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      )}
  
      <Modal
        visible={modaPaciente}
        animationType='slide'
      > 
        <InfoPacientes 
          paciente={paciente}
          setModalPaciente={setModalPaciente}
          setPaciente={setPaciente}
        />
      </Modal>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f0ea',
    flex: 1,
    paddingTop: 0
  },
  banner: {
    backgroundColor: '#832603',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bannerText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800'
  },
  button: {
    marginVertical: 10,
    backgroundColor: '#757e2b',
    marginHorizontal: 30,
    padding: 25,
    borderRadius: 50,
    borderWidth: 1,
    marginBottom:40,
    marginTop:40
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  redBackground: {
    backgroundColor: '#832603',
    alignItems: 'center'
  },
  textContainer: {
    backgroundColor: '#e2a62e',
    paddingHorizontal: 60,
    paddingVertical: 140,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 30,
    marginTop: 10
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});


export default App;