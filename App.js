import * as React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default function App(){
  return(
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Profissões na área de tecnologia</Text>
        <Text>Programador de mobile</Text>
        <Image style={estilo.img} source={require("./assets/mobile.jpg")}/>
        <Text>Programador de Back-end</Text>
        <Image style={estilo.img} source={require("./assets/backend.jpg")}/>
        <Text>Programador de Front-end</Text>
        <Image style={estilo.img} source={require("./assets/frontend.jpg")}/>
        <Text>Analista de dados</Text>
        <Image style={estilo.img} source={require("./assets/datasci.jpg")}/>      
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00BFFF"
  },
  titulo:{
    fontSize:50,
    color: "#FFFFFF"
  },
  img:{
    width: 350,
    height: 200,
    marginBottom: 20,    borderRadius:20
  }
})