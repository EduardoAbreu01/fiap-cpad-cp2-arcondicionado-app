
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {

  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <View style={styles.header}>
        <Text style={styles.tituloApp}>Clima FIAP</Text>
        <Text style={styles.subtituloApp}>Controle de Temperatura das Salas</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>Visão Geral</Text>
        <Text style={styles.texto}>
          Bem-vindo! Nosso aplicativo foi desenvolvido para centralizar e facilitar o monitoramento térmico das salas de aula. 
          Através de uma interface intuitiva, você consegue verificar a temperatura atual de qualquer laboratório ou sala, 
          além de acompanhar o histórico e o status de todas as solicitações de ajuste de clima em tempo real.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>Nossa Motivação</Text>
        <Text style={styles.texto}>
          A ideia deste projeto nasceu de uma dor real: as temperaturas das salas da nossa faculdade frequentemente não estão adequadas 
          para o conforto e a concentração, e os alunos não têm autonomia para ajustar o ar-condicionado. 
          {'\n\n'}
          Para resolver essa falta de comunicação, criamos esta plataforma. Nela, qualquer aluno pode abrir um chamado rápido e direto 
          solicitando ao Help Center a alteração da temperatura, garantindo um ambiente mais agradável para todos!
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>Desenvolvedores</Text>
        <View style={styles.listaIntegrantes}>
          <Text style={styles.textoLista}>• Eduardo Abreu (rm566460)</Text>
          <Text style={styles.textoLista}>• Gabriel dos Anjos (rm565532)</Text>
          <Text style={styles.textoLista}>• Gabrielly Lorentz (rm565806)</Text>
          <Text style={styles.textoLista}>• Heitor Fernandes (rm563078)</Text>
          <Text style={styles.textoLista}>• João Pedro Ferreira (rm563869)</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.botaoIniciar}

        onPress={() => router.push('/pagina2')} 
      >
        <Text style={styles.textoBotao}>Acessar Salas ➔</Text>
      </TouchableOpacity>

      <View style={styles.espacoFinal} /> 

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#000', 
  },
  header: {
    marginTop: 50,
    marginBottom: 30,
    alignItems: 'center', 
  },
  tituloApp: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F23064', 
  },
  subtituloApp: {
    fontSize: 16,
    color: '#ffff',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingBottom: 8,
  },
  texto: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24, 
    textAlign: 'justify',
  },
  listaIntegrantes: {
    marginTop: 5,
  },
  textoLista: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
    fontWeight: '500',
  },
  botaoIniciar: {
    backgroundColor: '#000',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  espacoFinal: {
    height: 40,
  }

});