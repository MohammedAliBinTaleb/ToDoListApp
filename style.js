
import {StyleSheet,StatusBar} from 'react-native'
export  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:StatusBar.currentHeight+20,
      backgroundColor: '#fff',
      
    },
    borderTextInput:{
        borderColor:'#000',
        borderWidth:1,
        
        
    },taskView:{
        backgroundColor:'#0000aa',
        marginVertical:10,
        alignItems:'center',
        padding:5,
        flexDirection:'row'

    },
    circle:{
        marginLeft:15,
        height:50,
        width:50,
        borderRadius:50,
        borderColor:'green',
        borderWidth:1

    },
    textTask:{

        color:'#fff',
        fontSize:24,

    }

  });