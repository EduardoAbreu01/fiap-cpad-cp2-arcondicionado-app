import { View,Text,StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';

export default function login() {

    const router = useRouter();
  return (
    <View style ={styles.container}>
      <Text>login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColoor: "#30e088"
    }
})