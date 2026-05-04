import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#E83D84' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerStyle: { backgroundColor: '#262626' },
          headerTintColor: '#E83D84',
          tabBarStyle: { backgroundColor: '#262626' },
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="pagina2"
        options={{
          title: 'Temperatura',
          headerStyle: { backgroundColor: '#262626' },
          headerTintColor: '#E83D84',
          tabBarStyle: { backgroundColor: '#262626' },
          tabBarIcon: ({ color }) => <Ionicons name="thermometer-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="pagina3"
        options={{
          title: 'Chamado',
          headerStyle: { backgroundColor: '#262626' },
          headerTintColor: '#E83D84',
          tabBarStyle: { backgroundColor: '#262626' },
          tabBarIcon: ({ color }) => <Ionicons name="add-circle-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="pagina5"
        options={{
          title: 'Sair',
          headerStyle: { backgroundColor: '#262626' },
          headerTintColor: '#E83D84',
          tabBarStyle: { backgroundColor: '#262626' },
          tabBarIcon: ({ color }) => <Ionicons name="log-out-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}