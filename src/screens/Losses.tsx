import { View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { saveEvent } from '../storage/eventStorage';


export default function Losses() {
  const nav = useNavigation<any>();
  const { params }: any = useRoute();
  const draft = params?.draft ?? {};

  const [losses, setLosses] = useState('');

  async function finish() {
    await saveEvent({ ...draft, losses });
    Alert.alert('Sucesso', 'Evento registrado!');
    nav.navigate('Panorama');
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Descreva prejuízos"
        value={losses}
        onChangeText={setLosses}
        multiline
        style={{ borderWidth: 1, padding: 10, height: 120 }}
      />
      <Button title="Salvar" onPress={finish} disabled={!losses.trim()} />
    </View>
  );
}
