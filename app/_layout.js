import { Stack } from 'expo-router';
import { UserProvider } from '../context/UserContext';

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="cadastro" options={{ title: 'Criar Conta' }} />

        <Stack.Screen name="login" options={{ title: 'Login' }} />
            
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}