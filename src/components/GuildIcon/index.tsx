import { CDN_IMAGE } from "../../configs/index";
import { View, Text, Image } from "react-native";
import DiscordSvg from "../../assets/discord.svg";
import { styles } from "./styles";

type Props = {
  guildId: string;
  iconId: string | null;
};

export const GuildIcon = ({ guildId, iconId }: Props) => {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <View style={styles.container}>
      {iconId ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  );
};
