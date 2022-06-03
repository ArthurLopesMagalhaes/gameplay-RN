import { useCallback, useEffect, useState } from "react";
import { StatusBar, LogBox } from "react-native";

LogBox.ignoreLogs([
  "You are not currently signed in to Expo on your development machine",
]);

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { Background } from "./src/components/Background";
import { MainRoutes } from "./src/routes";

import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import { AuthProvider } from "./src/contexts/authContext";
import AppLoading from "expo-app-loading";

function App() {
  const [fontsLoaded] = Font.useFonts({
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
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </Background>
  );
}

export default gestureHandlerRootHOC(App);

// const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         SplashScreen.preventAutoHideAsync();
//         // Pre-load fonts, make any API calls you need to do here
//         await Font.loadAsync({
//           Inter_400Regular,
//           Inter_500Medium,
//           Rajdhani_500Medium,
//           Rajdhani_700Bold,
//         });
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         setAppIsReady(true);
//         SplashScreen.hideAsync();
//       }
//     }

//     prepare();
//   }, []);
