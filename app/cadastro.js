import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useRouter } from 'expo-router';

import salasData from './salas.json'; 

export default function Cadastro() {
    
    const router = useRouter();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    
    const [salasSelecionadas, setSalasSelecionadas] = useState([]);

    const [erro, setErro] = useState(""); 
    const [carregando, setCarregando] = useState(false); 

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const toggleSala = (idSala) => {
        if (salasSelecionadas.includes(idSala)) {
            setSalasSelecionadas(salasSelecionadas.filter(id => id !== idSala));
        } else {
            setSalasSelecionadas([...salasSelecionadas, idSala]);
        }
    };

    const handleSubmit = async () => {


        if (!nome || !email || !senha || !confirmaSenha) {
            setErro('Preencha todos os campos obrigatórios.'); 
            return;
        }
        if(!regexEmail.test(email.trim())){
            setErro("E-mail inválido!");
            return;
        }
        if (senha.length < 6) {
            setErro("A senha deve conter no mínimo 6 caracteres.");
            return;
        }
        if (senha !== confirmaSenha) {
            setErro('As senhas não coincidem!');
            return;
        }
        if (salasSelecionadas.length === 0) {
            setErro('Selecione pelo menos uma sala.');
            return;
        }

        setErro(''); 
        setCarregando(true); 

        try {
            await AsyncStorage.setItem("nome", nome);
            await AsyncStorage.setItem("email", email.trim());
            await AsyncStorage.setItem("senha", senha);
            
            const dadosSalasSelecionadas = salasData.filter(sala => salasSelecionadas.includes(sala.id));
            await AsyncStorage.setItem("salas", JSON.stringify(dadosSalasSelecionadas));
            
        } catch (error) {
            console.log(error.message);
            Alert.alert("Erro", "Falha ao salvar os dados.");
            return;
        }
        
        setNome("");
        setEmail("");
        setSenha("");
        setConfirmaSenha("");
        setSalasSelecionadas([]);
        setCarregando(false);

        Alert.alert('Sucesso', 'Cadastro Realizado com sucesso!');
        router.push('/login');
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Criar Conta</Text>

            {erro ? <Text style={styles.errorText}>{erro}</Text> : null}

            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#888"
                value={nome}
                onChangeText={setNome}
            />
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
            <TextInput
                style={styles.input}
                placeholder="Confirme a senha"
                placeholderTextColor="#888"
                value={confirmaSenha}
                onChangeText={setConfirmaSenha}
                secureTextEntry={true}
            />

            <Text style={styles.labelTitle}>Selecione suas salas:</Text>
            <View style={styles.chipsContainer}>
                {salasData.map((sala) => {
                    const isSelected = salasSelecionadas.includes(sala.id);
                    return (
                        <TouchableOpacity
                            key={sala.id}
                            style={[styles.chip, isSelected && styles.chipSelected]}
                            onPress={() => toggleSala(sala.id)}
                        >
                            <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                                {sala.nome}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                            style={styles.linkButton} 
                            onPress={() => router.push('/login')}
                        >
                            <Text style={styles.linkText}>Voltar ao Login</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
    },
    contentContainer: {
        padding: 24,
        paddingTop: 48,
        paddingBottom: 48,
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
    labelTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        marginBottom: 12,
        marginTop: 8,
        fontWeight: 'bold',
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
    linkButton: {
        marginTop: 24,
        alignItems: 'center',
    },
    linkText: {
        color: '#888',
        fontSize: 14,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },
});