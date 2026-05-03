import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, Image } from 'react-native';

export default function MeuPerfil() {
  const [nome, setNome] = useState('João');
  const [sala, setSala] = useState('CCPQ');

  const handleSubmit = () => {
    Alert.alert('Perfil atualizado com sucesso!', `Nickname: ${nome} \nSala: ${sala}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil</Text>

      <View style={{ 
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
      }}>
        <Image 
          source={require('../../assets/images.png')}
          style={{ width: 250, height: 250, borderRadius: 150 }}
        />
      </View>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#aaa"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Sala</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a sala"
        placeholderTextColor="#aaa"
        value={sala}
        onChangeText={setSala}
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#E83D84'
  },
  label: {
    color: '#fff',
    marginBottom: 5
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#fff'
  },
});