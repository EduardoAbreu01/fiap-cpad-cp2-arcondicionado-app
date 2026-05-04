// app/_layout.js
import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProvider, useUser } from '../context/UserContext';

function RootLayoutNav() {
  const { user, setUser } = useUser();
  const router = useRouter();
  const segments = useSegments(); // Lê a página em que estamos
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Quando o app abre, ele procura a chave "usuario_logado"
    const checkLogin = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("usuario_logado");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (e) {
        console.error("Erro ao carregar sessão", e);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  useEffect(() => {
    if (loading) return;

    // Verifica se o utilizador está a tentar aceder às páginas dentro do (tabs)
    const inAuthGroup = segments[0] === '(tabs)';

    if (user.email && !inAuthGroup) {
      // Tem login feito? Vai direto para as Tabs (ignora o ecrã de login)
      router.replace('/(tabs)');
    } else if (!user.email && inAuthGroup) {
      // Não tem login feito mas tentou entrar nas Tabs? Volta para o login
      router.replace('/login');
    }
  }, [user.email, loading, segments]);

  if (loading) return null; // Ecrã em branco enquanto verifica a memória

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="cadastro" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <UserProvider>
      <RootLayoutNav />
    </UserProvider>
  );
}