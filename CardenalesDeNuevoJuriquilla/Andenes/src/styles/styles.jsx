export default styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#15303B',
        flex: 1
      },
      titulo: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        paddingTop: 40,
        marginTop: 20,
        color: '#FFFFFF'
      },
      imputs:{
        backgroundColor: '#234B5C',
        marginHorizontal: 50,
        textAlign: 'center',
        color: '#B5B2B2',
        marginTop: 40,
        height: 60,
        fontSize: 20,
        textTransform: 'uppercase',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    
      },
      contraseña:{
        flex: 1, 
        backgroundColor: '#234B5C',
        fontSize: 20,
        height: 60,
        color: '#B5B2B2',
        textTransform: 'uppercase',
        textAlign: 'center'
      },
      imagen: {
        height: 60,
        width: 60
      },
      entrar:{
        backgroundColor: '#4FA348',
        marginHorizontal: 40,
        marginTop: 50,
        height: 70,
        justifyContent: 'center'
      },
      entrarTxt: {
        textAlign: 'center',
        fontSize: 30
      },
      registro:{
        marginHorizontal: 40,
        marginTop: 15,
        height: 30
      },
      registroTxt: {
        textAlign: 'center',
        color: '#4C7E93'
      },
      contendorVacio:{
        backgroundColor: '#294855',
        marginTop: 250,
        height: 100,
      }
})