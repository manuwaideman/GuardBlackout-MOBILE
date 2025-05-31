import { ScrollView, Text } from 'react-native';
import React from 'react';

export default function Tips() {
  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
        Como se preparar para blecautes
      </Text>
      {[
        'Tenha lanternas carregadas e baterias extras.',
        'Desligue eletrodomésticos sensíveis das tomadas.',
        'Mantenha portas de freezer/gela fechadas para conservar alimentos.',
        'Evite usar velas próximas a materiais inflamáveis.',
        'Monitore avisos da defesa civil se houver tempestade ou ventos fortes.',
      ].map((tip) => (
        <Text key={tip}>{'\u2022'} {tip}{'\n'}</Text>
      ))}
    </ScrollView>
  );
}
