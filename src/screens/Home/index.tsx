import { View, Text, SafeAreaView, FlatList } from "react-native";
import { styles } from "./styles";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { useState } from "react";
import { ListHeader } from "../../components/ListHeader";
import { Appoitment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendarios",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 22:00h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendarios",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 22:00h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  const navigation = useNavigation();

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  };

  const handleAppointmentDetails = () => {
    navigation.navigate("AppointmentDetails");
  };
  const handleAppointmentCreate = () => {
    navigation.navigate("AppointmentCreate");
  };

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle={`Total ${"6"}`} />
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appoitment data={item} onPress={handleAppointmentDetails} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
};
