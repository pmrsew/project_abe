import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

//styling
import { mainBGColor } from './AppStyling/Colors';

//components
import AppBarMenu from './Components/Menus/AppBarMenu';

//testing components
import ProfileMain from './Components/Profile/ProfileMain';
import IncreaseDecreaseCalc from './Components/Calculators/IncDecSingleRow';


export default function App() {
  return (
    <View style={appStyles.fullContainer}>
      <AppBarMenu />
      {/* <ProfileMain /> */}
      <View style={appStyles.viewingContainer}>
        <IncreaseDecreaseCalc />
      </View>
    </View>
  );
}

const appStyles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: mainBGColor
  },
  viewingContainer: {
    
  }
});
