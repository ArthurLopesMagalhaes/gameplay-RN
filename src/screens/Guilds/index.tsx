import { View, Text, FlatList } from "react-native";
import { GuildItem, GuildProps } from "../../components/GuildItem";
import { ListDivider } from "../../components/ListDivider";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export const Guilds = ({ handleGuildSelect }: Props) => {
  const guilds = [
    {
      id: "1",
      name: "Lendarios",
      icon: "null",
      owner: true,
    },
    {
      id: "2",
      name: "Galera do Game",
      icon: "null",
      owner: true,
    },
    {
      id: "3",
      name: "Galera do Game",
      icon: "null",
      owner: true,
    },
    {
      id: "4",
      name: "Galera do Game",
      icon: "null",
      owner: true,
    },
    {
      id: "5",
      name: "Galera do Game",
      icon: "null",
      owner: true,
    },
    {
      id: "6",
      name: "Galera do Game",
      icon: "null",
      owner: true,
    },
    {
      id: "7",
      name: "Galera do Game",
      icon: "null",
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
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
    </View>
  );
};
