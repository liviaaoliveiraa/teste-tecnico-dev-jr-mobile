import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Linking,
} from 'react-native';

export default function ProjetosScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarContato = () => {
    if (!nome || !email || !mensagem) {
      Alert.alert('Atenção', 'Preencha todos os campos antes de enviar.');
      return;
    }

    Alert.alert(
      'Contato enviado!',
      `Obrigada, ${nome}! Sua mensagem foi enviada com sucesso.`
    );

    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Meus Projetos</Text>

      <View style={styles.card}>
        <Text style={styles.projetoTitulo}>App Lista de Tarefas</Text>
        <Text style={styles.projetoTexto}>
          Aplicativo desenvolvido em React Native para organização de tarefas,
          com cadastro, edição e remoção de atividades.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.projetoTitulo}>Sistema de Biblioteca</Text>
        <Text style={styles.projetoTexto}>
          Projeto full stack com frontend e backend para gerenciamento de livros,
          usuários e empréstimos.
        </Text>
      </View>

      <Text style={styles.titulo}>Contato</Text>

      <Text style={styles.info}>📧 Email: livia.o.cruz@aluno.senai.br </Text>
     <Text style={styles.info}>💻 GitHub: liviaaoliveiraa</Text>
      <Text style={styles.info}>🔗 LinkedIn: livia oliveira</Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={[styles.input, styles.mensagemInput]}
        placeholder="Digite sua mensagem"
        value={mensagem}
        onChangeText={setMensagem}
        multiline
      />

      <TouchableOpacity style={styles.botao} onPress={enviarContato}>
        <Text style={styles.botaoTexto}>Enviar Contato</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#547d9e',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 4,
  },
  projetoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  projetoTexto: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  link: {
    fontSize: 16,
    color: '#1E90FF',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  mensagemInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  botao: {
    backgroundColor: '#547d9e',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});