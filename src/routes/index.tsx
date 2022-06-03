import { NavigationContainer } from "@react-navigation/native";
import { Background } from "../components/Background";
import { useAuth } from "../contexts/authContext";
import { SignIn } from "../screens/SignIn";
import { AppRoutes } from "./app.routes";

export const MainRoutes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
};
