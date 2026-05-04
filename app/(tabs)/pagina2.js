import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Pagina2() {
  const [minhasSalas, setMinhasSalas] = useState([]);
  const [salaSelecionadaId, setSalaSelecionadaId] = useState();
  const router = useRouter();

  // useFocusEffect roda a função toda vez que a tela ganha foco (é aberta)
  useFocusEffect(
    useCallback(() => {
      const carregarSalas = async () => {
        try {
          const salasSalvas = await AsyncStorage.getItem("salas");
          if (salasSalvas) {
            const salasParsed = JSON.parse(salasSalvas);
            setMinhasSalas(salasParsed);
            
            // Se ainda não tem sala selecionada no Picker, seleciona a primeira da lista por padrão
            if (salasParsed.length > 0 && !salaSelecionadaId) {
              setSalaSelecionadaId(salasParsed[0].id);
            }
          }
        } catch (error) {
          console.error("Erro ao carregar salas", error);
        }
      };
      carregarSalas();
    }, [])
  );

  const salaAtual = minhasSalas.find(s => s.id === salaSelecionadaId);
  const temperaturaExibicao = salaAtual ? salaAtual.temperatura : "--";

  return (
    <View style={styles.container}>
      <View style={styles.listaContainer}>
        <Text style={styles.label}>Selecione a Sala:</Text>
        
        <Picker
          selectedValue={salaSelecionadaId}
          onValueChange={(itemValue) => setSalaSelecionadaId(itemValue)}
          style={styles.lista}
        >
          {/* Mostra as salas dinamicamente, ou uma mensagem caso não tenha salas */}
          {minhasSalas.length > 0 ? (
            minhasSalas.map((sala) => (
              <Picker.Item key={sala.id} label={sala.nome} value={sala.id} />
            ))
          ) : (
            <Picker.Item label="Nenhuma sala cadastrada" value="" />
          )}
        </Picker>
      </View>

      <View style={styles.boxContainer}>
        <Text style={styles.status}>
          Temperatura Atual:{"\n"}
          <Text style={styles.temperatura}>{temperaturaExibicao}°C</Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={() => router.push("pagina3")}>
        <Text style={styles.botaoTexto}>Abrir chamado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Mantive as suas cores originais da pagina2.js
  container: { 
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#262626',
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
  botaoTexto: {
    fontSize: 20,
    color: "#FFF"
  }
});