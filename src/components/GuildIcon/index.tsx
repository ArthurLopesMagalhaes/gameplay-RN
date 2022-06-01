import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export const GuildIcon = () => {
  const uri =
    "https://tm.ibxk.com.br/2021/09/16/16083944465013.jpg?ims=1200x675";

  return <Image source={{ uri }} style={styles.image} resizeMode="contain" />;
};
