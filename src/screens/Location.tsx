import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

export default function Location() {
  const nav = useNavigation<any>();
  const [region, setRegion] = useState('');

  function next() {
    if (!region.trim()) {
      Alert.alert('Campo obrigatório', 'Informe bairro, cidade ou CEP');
      return;
    }
    nav.navigate('Duracao', {
      draft: {
        id: uuid.v4().toString(),
        region,
        createdAt: new Date().toISOString(),
      },
    });
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Bairro, cidade ou CEP"
        value={region}
        onChangeText={setRegion}
        style={{ borderWidth: 1, padding: 10, marginBottom: 12 }}
      />
      <Button title="Continuar" onPress={next} />
    </View>
  );
}
