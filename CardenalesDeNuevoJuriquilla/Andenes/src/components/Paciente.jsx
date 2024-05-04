import React from 'react'
import { Text, View,  StyleSheet, Pressable } from 'react-native'

const Paciente = ({
  item, 
  setModalVisible, 
  setPaciente,
  pacienteEditar,
  pacienteEliminar,
  setModalPaciente
  }) => {
  const {paciente, fecha, id} = item;
  const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha)
    const opciones = {
      weekdat: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    return nuevaFecha.toLocaleDateString('es-ES', opciones)
  }
  return (
    <Pressable
      onLongPress={() => {
        setModalPaciente(true)
        setPaciente(item)
      }}
    >
      <View style={styles.contenedor} >
        <Text style={styles.label}>Informacion del arrivo: </Text>
        <Text style={styles.textAlt}>ID: {paciente}</Text>

        <View style={styles.contenedorBTN}>
          <Pressable 
            style={[styles.btn, styles.btnEditar]}
              onLongPress={() => {
              setModalVisible(true)
              pacienteEditar(id)
            }}
          >
            <Text style={styles.btnText}>Editar</Text>
          </Pressable>
          <Pressable 
            style={[styles.btn, styles.btnEliminar]}
            onLongPress={() => pacienteEliminar(id)}
            >
            <Text style={styles.btnText}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
    
    )
}
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor:'#FFF',
    padding: 20,
    borderBottomColor: '#94A3B8',
    borderBottomWidth: 1,
    borderRadius: 10
  },
  textAlt: {
    color: '#234B5C',
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 10
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10
  },
  contenedorBTN: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20
  },
  btn:{
    paddingVertical: 10,
    paddingHorizontal:20
  },
  btnEditar: {
    backgroundColor: '#4FA348',
    borderRadius: 50
  },
  btnText: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize:15
  },
  btnEliminar: {
    backgroundColor: '#EF4444',
    borderRadius: 50
  }

})

export default Paciente
