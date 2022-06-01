import { NavigationContainer } from "@react-navigation/native";
import { Background } from "../components/Background";
import { AuthRoutes } from "./auth.routes";

export const MainRoutes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};
