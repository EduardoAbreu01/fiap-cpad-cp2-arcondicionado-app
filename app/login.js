import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useUser } from '../context/UserContext';

export default function login(){
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    const router = useRouter();

    const { setUser } = useUser();

    const verificaLogin = async () => {

        if(!email || !senha){
            Alert.alert('Atenção', 'Preencha todos os campos');
            return;
        }

            const nomeCadastrado = await AsyncStorage.getItem("nome");
            const emailCadastrado = await AsyncStorage.getItem("email");
            const senhaCadastrada = await AsyncStorage.getItem("senha");
            
            if(email.trim() != emailCadastrado || senha.trim() != senhaCadastrada){
                Alert.alert('Erro','Usuário não cadastrado')
                return;
            }
            else {
                const dadosUsuario = { nome: nomeCadastrado, email: emailCadastrado };
                
                setUser(dadosUsuario);
                
                await AsyncStorage.setItem("usuario_logado", JSON.stringify(dadosUsuario));

                Alert.alert('Sucesso', 'Login realizado com sucesso!');
                router.replace('/(tabs)');
            }

    };


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Entrar</Text>

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#888"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={verificaLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.linkButton} 
                onPress={() => router.push('/cadastro')}
            >
                <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
        padding: 24,
        justifyContent: 'center', 
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#F23064',
        marginBottom: 32,
        textAlign: 'center',
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
    linkButton: {
        marginTop: 24,
        alignItems: 'center',
    },
    linkText: {
        color: '#888',
        fontSize: 14,
        fontWeight: '500',
        textDecorationLine: 'underline',
    }
});