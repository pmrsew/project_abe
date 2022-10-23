import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import ProfileMain from './Components/Profile/ProfileMain';
import IncreaseDecreaseCalc from './Components/Calculators/IncDecSingleRow';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ProfileMain /> */}
      <IncreaseDecreaseCalc />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 40
}
});
