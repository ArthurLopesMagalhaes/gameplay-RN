import { StatusBar } from "react-native";

import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { SignIn } from "./src/screens/SignIn";
import { Background } from "./src/components/Background";
import { Home } from "./src/screens/Home";
import { MainRoutes } from "./src/routes";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />
      <MainRoutes />
    </Background>
  );
}

export default gestureHandlerRootHOC(App);
