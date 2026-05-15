import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function HabilidadesScreen() {
  const habilidades = [
    'React Native',
    'JavaScript',
    'Expo',
    'Git e GitHub',
    'UI/UX Mobile',
    'APIs REST',
    'Node.js Básico',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Habilidades</Text>

      <FlatList
        data={habilidades}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#547d9e',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3,
  },
  texto: {
    fontSize: 18,
    color: '#333',
  },
});