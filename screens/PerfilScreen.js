import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function PerfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/líviaaaaa.png')}
        style={styles.image}
      />

      <Text style={styles.nome}>Lívia Oliveira</Text>
      <Text style={styles.cargo}>Desenvolvedora Mobile Júnior</Text>

      <Text style={styles.titulo}>Sobre Mim</Text>
      <Text style={styles.sobre}>
        Sou uma desenvolvedora em formação apaixonada por tecnologia, React Native,
        desenvolvimento mobile e criação de interfaces organizadas e funcionais.
        Busco minha primeira oportunidade na área para aplicar meus conhecimentos,
        crescer profissionalmente e contribuir com soluções inovadoras.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 0,
    marginBottom: 20,
    marginTop: 20,
  },
  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  cargo: {
    fontSize: 18,
    color: '#547d9e',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#547d9e',
  },
  sobre: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    lineHeight: 24,
  },
});