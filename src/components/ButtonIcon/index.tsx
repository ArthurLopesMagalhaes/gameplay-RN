import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import DiscordImg from "../../assets/discord.png";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
  title: string;
}

export const ButtonIcon = ({ title, ...rest }: Props) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};
