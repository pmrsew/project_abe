import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NativeRouter, Route, Link, Routes } from "react-router-native";

//styling
import { mainBGColor } from './AppStyling/Colors';

//components
import AppBarMenu from './Components/Menus/AppBarMenu';
import HomeMenu from './Components/Menus/HomeMenu';
import CalculatorsMenu from "./Components/Menus/CalculatorsMenu";

//testing components
import ProfileMain from './Components/Profile/ProfileMain';
import IncreaseDecreaseCalc from './Components/Calculators/IncDecSingleRow';
import TestReactRoute from './Components/Menus/TestReactRoute';
import PatternMakingMenu from './Components/Menus/PatternMakingMenu';
import PatternForm from './Components/PatternMaking/PatternForm';



export default function App() {
  return (
    <NativeRouter>
      <View style={appStyles.fullContainer}>
        <AppBarMenu />
        {/* <ProfileMain /> */}
        <View style={appStyles.viewingContainer}>
          {/* <IncreaseDecreaseCalc /> */}
          {/* <HomeMenu /> */}
          {/* <TestReactRoute /> */}
        </View>
        <Routes>
          <Route exact path="/" element={<HomeMenu />} />
          <Route path="/calculators" element={<CalculatorsMenu />} />
          <Route path="/pattern-making" element={<PatternMakingMenu />} />
          <Route path="/pattern-form" element={<PatternForm />} />
        </Routes>
      </View>
    </NativeRouter>

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
