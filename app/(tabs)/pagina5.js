import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useUser } from '../../context/UserContext';

export default function Perfil() {
  const { user, setUser } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    Alert.alert(
      "Sair",
      "Deseja realmente sair da conta?",
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Sair", 
          style: "destructive",
          onPress: async () => {
            await AsyncStorage.removeItem("usuario_logado");

            setUser({ nome: '', email: '' });
            
            router.replace('/login');
          } 
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, {user.nome}</Text>
      <Text style={styles.subText}>{user.email}</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  text: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
  subText: { color: '#888', marginBottom: 40 },
  logoutButton: {
    backgroundColor: '#F23064',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8
  },
  logoutText: { color: '#FFF', fontWeight: 'bold' }
});