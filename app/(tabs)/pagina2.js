import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
export default function Layout() {
  const [selectedValue, setSelectedValue] = useState("19.5");
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.listaContainer}>
        <Text style={styles.label}>Selecione a Sala:</Text>
        
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.lista}
        >
          <Picker.Item label="Sala 102" value="19.5" />
          <Picker.Item label="Sala 405" value="23.5" />
          <Picker.Item label="Sala 507" value="21.0" />
        </Picker>
      </View>

      <View style={styles.boxContainer}>
        <Text style={styles.status}>
          Temperatura Atual: <Text style={styles.temperatura}>{selectedValue}°C</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto} onPress={() => router.push("pagina3")}>Abrir chamado</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#000',
    padding: 30
  },
  texto: { 
    fontSize: 36, 
    marginBottom: 30 
  },
  listaContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  lista: {
    height: 50,
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
    marginLeft: 5,
  },
  boxContainer:{
    marginTop: 20,
    marginBottom: 20,
    width: 180, 
    height: 180,
    borderRadius: 90, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
  },
  status: {
    fontSize: 22,
    color: '#333',
    textAlign: 'center',
  },
  temperatura: {
    fontWeight: 'bold',
    color: '#E83D84',
  },
  botao:{ 
    backgroundColor: '#E83D84', 
    padding: 16, 
    borderRadius: 12 
  },
  botaoTexto:   {
    fontSize: 20,
    color: "#FFF"
  }
});