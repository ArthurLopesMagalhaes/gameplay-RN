import { useCallback, useEffect, useState } from "react";
import { StatusBar, View } from "react-native";

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

function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          Inter_400Regular,
          Inter_500Medium,
          Rajdhani_500Medium,
          Rajdhani_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

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
