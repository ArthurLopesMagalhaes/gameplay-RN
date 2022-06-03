import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { GuildItem, GuildProps } from "../../components/GuildItem";
import { ListDivider } from "../../components/ListDivider";
import { Load } from "../../components/Load";

import { theme } from "../../global/styles/theme";
import { api } from "../../services/api";
import { styles } from "./styles";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export const Guilds = ({ handleGuildSelect }: Props) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loadingGuilds, setLoadingGuilds] = useState(true);

  const fetchGuilds = async () => {
    const response = await api.get("/users/@me/guilds");
    setGuilds(response.data);
    setLoadingGuilds(false);
  };

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loadingGuilds ? (
        <Load />
      ) : (
        <FlatList
          style={styles.guilds}
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GuildItem data={item} onPress={() => handleGuildSelect(item)} />
          )}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          contentContainerStyle={{ paddingBottom: 68 }}
        />
      )}
    </View>
  );
};
