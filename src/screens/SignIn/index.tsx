import { View, Text, Image, StatusBar } from "react-native";
import { styles } from "./styles";
import IlustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export const SignIn = () => {
  return (
    <View style={styles.conteiner}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparente"
        translucent
      />
      <Image
        source={IlustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.6} />
      </View>
    </View>
  );
};