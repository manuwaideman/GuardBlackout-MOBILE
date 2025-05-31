import { View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function Duration() {
  const nav = useNavigation<any>();
  const { params }: any = useRoute();
  const draft = params?.draft ?? {};

  const [time, setTime] = useState('');

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Ex.: 2h 15m"
        value={time}
        onChangeText={setTime}
        style={{ borderWidth: 1, padding: 10, marginBottom: 12 }}
      />
      <Button
        title="Continuar"
        onPress={() =>
          nav.navigate('Prejuizos', { draft: { ...draft, duration: time } })
        }
        disabled={!time.trim()}
      />
    </View>
  );
}
