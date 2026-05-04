import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MeuFormulario() {
  const [minhasSalas, setMinhasSalas] = useState([]);
  const [salaSelecionadaId, setSalaSelecionadaId] = useState(null);
  const [temp, setTemperatura] = useState('');

  useEffect(() => {
    const carregarSalas = async () => {
      try {
        const salasSalvas = await AsyncStorage.getItem("salas");
        if (salasSalvas) {
          setMinhasSalas(JSON.parse(salasSalvas));
        }
      } catch (error) {
        console.error("Erro ao carregar salas", error);
      }
    };
    carregarSalas();
  }, []);

  const handleSubmit = async () => {
    if (!salaSelecionadaId || temp === '') {
      Alert.alert('Erro', 'Por favor, selecione uma sala e digite a temperatura!');
      return;
    }

    const novaTemp = parseFloat(temp.replace(',', '.'));
    if (isNaN(novaTemp) || novaTemp < 16 || novaTemp > 30) {
      Alert.alert('Erro', 'Informe uma temperatura entre 16°C e 30°C.');
      return;
    }

    try {
      const salasAtualizadas = minhasSalas.map(sala => {
        if (sala.id === salaSelecionadaId) {
          return { ...sala, temperatura: novaTemp };
        }
        return sala;
      });

      await AsyncStorage.setItem("salas", JSON.stringify(salasAtualizadas));

      setMinhasSalas(salasAtualizadas);
      
      const salaNome = minhasSalas.find(s => s.id === salaSelecionadaId)?.nome;
      Alert.alert('Sucesso! Chamado Aberto', `Sala: ${salaNome} \nNova Temperatura: ${novaTemp}°C`);
      
      // Limpa os campos após o envio
      setTemperatura('');
      setSalaSelecionadaId(null);

    } catch (error) {
      Alert.alert('Erro', 'Falha ao atualizar a temperatura da sala.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Chamado</Text>

      <Text style={styles.label}>Selecione a Sala:</Text>
      
      <View style={styles.chipsContainer}>
        {minhasSalas.length > 0 ? (
          minhasSalas.map((sala) => {
            const isSelected = salaSelecionadaId === sala.id;
            return (
              <TouchableOpacity
                key={sala.id}
                style={[styles.chip, isSelected && styles.chipSelected]}
                onPress={() => setSalaSelecionadaId(sala.id)}
              >
                <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                  {sala.nome} ({sala.temperatura}°C)
                </Text>
              </TouchableOpacity>
            );
          })
        ) : (
          <Text style={{ color: '#888' }}>Nenhuma sala cadastrada.</Text>
        )}
      </View>

      <Text style={styles.label}>Nova Temperatura:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 22"
        placeholderTextColor="#aaa"
        value={temp}
        onChangeText={setTemperatura}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar Chamado</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#262626',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#E83D84'
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 12,
    marginTop: 8,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#404040',
    color: '#BF3B5E',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  chip: {
    backgroundColor: '#404040',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  chipSelected: {
    backgroundColor: '#F23064',
  },
  chipText: {
    color: '#888',
    fontSize: 14,
    fontWeight: '500',
  },
  chipTextSelected: {
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#F23064',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});