import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <LinearGradient
      colors={['rgba(63,94,251,1)', 'rgba(252,70,107,1)']}
      style={styles.background}
      start={{ x: 0.5, y: 0.5 }}
      end={{ x: 1, y: 1 }}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>Student Profile</Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>Joshua Marl G. Sara</Text>

            <Text style={styles.label}>Age:</Text>
            <Text style={styles.value}>20 years old</Text>

            <Text style={styles.label}>Course/Year/Section:</Text>
            <Text style={styles.value}>BSCS 3-3</Text>

            <Text style={styles.label}>About me:</Text>
            <Text style={styles.value}>
              A computer science student that is barely getting by.
            </Text>

            <Text style={styles.label}>Achievements:</Text>
            <Text style={styles.value}>- Positive Mindset</Text>

            <Text style={styles.label}>Skills:</Text>
            <Text style={styles.value}>-Python{'\n'}-Java{'\n'}-HTML{'\n'}-CSS{'\n'}-REACT NATIVE{'\n'}-MYSQL</Text>
          </Card.Content>
        </Card>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
  },
  paragraph: {
    margin: 24,
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E3E3E8',
  },
  card: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 10,
    opacity: 10,
    borderColor:'#2040E3',
    borderWidth: 3,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
  },
});
