import { StatusBar } from "react-native";

import theme from "./src/theme/";
import { Groups } from '@screens/Groups'
import { NewGroup } from '@screens/NewGroup'
import { Loading } from "@components/Loading";
import { ThemeProvider } from "styled-components";

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';


export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
    { !fontsLoaded ? <Loading/> : <NewGroup/> }
    </ThemeProvider>
    
  );
}