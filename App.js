import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.titulo}> Profissões na área de tecnologia</Text>
      </View>
      <ScrollView>
        <View>
          <Text style={estilo.texto}>Programador de mobile</Text>
          <Image style={estilo.img} source={require('./assets/mobile.jpg')} />
          <Text style={estilo.texto}>Programador de Back-end</Text>
          <Image style={estilo.img} source={require('./assets/backend.jpg')} />
          <Text style={estilo.texto}>Programador de Front-end</Text>
          <Image style={estilo.img} source={require('./assets/frontend.jpg')} />
          <Text style={estilo.texto}>Analista de dados</Text>
          <Image style={estilo.img} source={require('./assets/datasci.jpg')} />
        </View>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BFFF',
  },
  titulo: {
    fontSize: 50,
    color: '#FFFFFF',
    font: "display",
  },
  img: {
    width: 350,
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
  },
  texto: {
    fontSize: 20,
  },
});
