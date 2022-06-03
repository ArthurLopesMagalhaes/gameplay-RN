import {
  View,
  Text,
  Image,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import IlustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { useAuth } from "../../contexts/authContext";

export const SignIn = () => {
  const { loading, signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error as string);
    }
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={IlustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize suas {"\n"}
            jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
          )}
        </View>
      </SafeAreaView>
    </Background>
  );
};
