import { View, Text, Image, SafeAreaView } from "react-native";
import { styles } from "./styles";
import IlustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";

export const SignIn = () => {
  const navigation = useNavigation();

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
          <ButtonIcon
            title="Entrar com Discord"
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
};
