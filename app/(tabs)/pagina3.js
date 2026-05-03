import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
 
export default function MeuFormulario() {
  const [sala, setSala] = useState('');
  const [temp, setTemperatura] = useState('');
 
  const handleSubmit = () => {
    if (sala === '' || temp === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }
    Alert.alert('Sucesso! Chamado Aberto', `Sala: ${sala} \nTemperatura: ${temp}`);
  };
 
  return (
<View style={styles.container}>
<Text style={styles.titulo}>Chamado</Text>
<TextInput
        style={styles.input}
        placeholder="Digite a Sala"
        value={sala}
        placeholderTextColor="#aaa"
        onChangeText={setSala}  
        autoCapitalize="none" 
      />
 
<TextInput
        style={styles.input}
        placeholder="Digite a Temperatura"
        placeholderTextColor="#aaa"
        value={temp}
        onChangeText={setTemperatura}
      />
 
      {}
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
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    color:'#fff'
  },
});