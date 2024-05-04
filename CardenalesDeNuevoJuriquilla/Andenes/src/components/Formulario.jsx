import React, { useState, useEffect } from 'react';
import { Modal, Text, StyleSheet, View, TextInput, ScrollView, SafeAreaView, Pressable, Alert} from 'react-native';

const Formulario = ({
  modalVisible, 
  setModalVisible, 
  pacientes, setPacientes, 
  paciente: pacienteObj,
  setPaciente : setPacienteApp
}) => {
    const [paciente, setPaciente] = useState('');
    const [id, setId] = useState('');
    const [propietario, setPropietario] = useState('');

    useEffect( () => {
      if(Object.keys(pacienteObj).length > 0){
        setId(pacienteObj.id)
        setPaciente(pacienteObj.paciente)
        setPropietario(pacienteObj.propietario)
      }
    },[pacienteObj])

    

    const handleCita = () => {
      if ([paciente, propietario].includes('')){
        Alert.alert(
          'Error',
          'Todos los campos son obligatorios'
        )
        return;
      }

      const nuevoPaciente = {
        paciente,
        propietario,
      };

      // Reavisar si es un registro nuevo o edicion
      if(id) {
        // Editando
        nuevoPaciente.id = id

        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState)
        setPacientes(pacientesActualizados)
        setPacienteApp({})

    } else {
        // Nuevo Registro
        nuevoPaciente.id = Date.now()
        setPacientes([...pacientes, nuevoPaciente])
    }
      
      setModalVisible(!modalVisible);
      setId('')
      setPaciente('');
      setPropietario('');
    }
    return (
    <Modal
        animationType='slide'
        visible={modalVisible}>
        <SafeAreaView style= {styles.contenido}>
          <ScrollView>
              <Text style={styles.titulo}>{pacienteObj.id ? 'Editar': 'Nueva'} {''}
              <Text style={styles.tituloBold}>consulta</Text></Text> 
              <Pressable 
                style={styles.btnCancelar}
                onLongPress={() => {
                  setModalVisible(!modalVisible)
                  setPacienteApp({})
                  setId('')
                  setPaciente('')
                  setPropietario('')
                }}>
                <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
              </Pressable>
      
              <View style={styles.campo}>
                <Text style={styles.preguntas}>Id del arrivo: </Text>
                <TextInput
                  style={styles.input}
                  placeholder='Ej. 5467'
                  placeholderTextColor={'#666'}
                  value={paciente}
                  onChangeText={setPaciente}
                />
              </View>

              <View style={styles.campo}>
                <Text style={styles.preguntas}>Numero de anden: </Text>
                <TextInput
                  style={styles.input}
                  placeholder='Ej. 01, 02, 03'
                  placeholderTextColor={'#666'}
                  value={propietario}
                  onChangeText={setPropietario}
                />
              </View>

              <Pressable
              onPress={handleCita}
              style={styles.btnEnviar}>
                <Text style={styles.btnEnviarText}>{pacienteObj.id ? '✓ Editar consulta': '✓ Agregar consulta'}</Text>
              </Pressable>

            </ScrollView>
        </SafeAreaView>
      </Modal>
  )
}
const styles = StyleSheet.create({
    titulo: {
        textAlign: 'center',
        fontSize: 35,
        color: '#FFF', 
        fontWeight: '600',
        marginTop: 30
      },
      tituloBold: {
        fontWeight:'900'
      },
      btnCancelar: {
        marginVertical: 30,
        backgroundColor: '#4C7E93',
        marginHorizontal:30,
        padding: 15,
        borderRadius: 50
      },
      btnCancelarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '900',
        textTransform: 'uppercase'
      },
      contenido: {
        backgroundColor: '#15303B',
        flex: 1
      },
      preguntas: {
        color: '#FFF',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 15,
        fontWeight: '600'
      },
      input: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        color:'#171717'
      },
      campo: {
        marginTop: 10,
        marginHorizontal: 30,
        paddingBottom: 10
      },
      sintomasIn: {
        height: 100
      },
      fehcaContenedor:{
        borderRadius: 10
      },
      btnEnviar: {
        marginVertical: 50,
        marginHorizontal: 30,
        backgroundColor: '#4FA348',
        padding: 15,
        borderRadius: 50
      },
      btnEnviarText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: '700'
      }
});
export default Formulario;