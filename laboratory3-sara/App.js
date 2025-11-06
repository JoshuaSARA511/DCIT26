import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [music, setMusic] = useState('');
  const [musicList, setMusicList] = useState([]);

  const handleAdd = () => {
    if (music.trim() !== '') {
      setMusicList([...musicList, music]);
      setMusic('');
    }
  };

  return (
    <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>🎧 Favorite New Music 🎶</Text>
        <Text style={styles.subtitle}>Add your current favorite tracks or artists</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Song or Artist"
          placeholderTextColor="#888"
          value={music}
          onChangeText={setMusic}
        />

        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <LinearGradient colors={['#1db954', '#1ed760']} style={styles.buttonGradient}>
            <Text style={styles.buttonText}>ADD</Text>
          </LinearGradient>
        </TouchableOpacity>

        <FlatList
          data={musicList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Text style={styles.listText}>{index + 1}. {item}</Text>
            </View>
          )}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 70,
  },
  subtitle: {
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#1c1c1c',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    marginTop: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
  },
  buttonGradient: {
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    backgroundColor: '#121212',
    marginTop: 12,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#1db954',
    shadowColor: '#1db954',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  listText: {
    fontSize: 18,
    color: '#e6e6e6',
  },
});
