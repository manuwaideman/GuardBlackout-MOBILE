import 'react-native-gesture-handler'; 
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import { getEvents, saveAll } from '../storage/eventStorage';
import { PowerOutage } from '../types/PowerOutage';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const styles = StyleSheet.create({
    deleteBox: {
      backgroundColor: 'red',
      flex: 1,
      justifyContent: 'center',
    },
    deleteText: {
      color: '#fff',
      padding: 20,
    },
  });  

export default function Overview() {
  const [events, setEvents] = useState<PowerOutage[]>([]);

  useFocusEffect(
    useCallback(() => {

      getEvents().then(setEvents);
    }, [])
  );
  
  async function deleteEvent(id: string) {
    const filtered = events.filter((e) => e.id !== id);
    await saveAll(filtered);
    setEvents(filtered);
  }

  const renderRightActions = (id: string) => (
    <View style={styles.deleteBox}>
      <Text style={styles.deleteText}>Excluir</Text>
    </View>
  );
  

  if (!events.length)
    return <Text style={{ margin: 16 }}>Nenhum evento registrado.</Text>;

  return (
    <FlatList
      data={events}
      keyExtractor={(e) => e.id}
      renderItem={({ item }) => (
        <Swipeable
          renderRightActions={() => renderRightActions(item.id)}
          onSwipeableOpen={() => deleteEvent(item.id)}
        >
          <View style={{ padding: 12, borderBottomWidth: 1 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.region}</Text>
            <Text>Duração: {item.duration}</Text>
            <Text>Prejuízos: {item.losses}</Text>
          </View>
        </Swipeable>
      )}
    />
  );
}
