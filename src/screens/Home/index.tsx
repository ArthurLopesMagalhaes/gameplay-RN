import { View, Text, SafeAreaView, FlatList } from "react-native";
import { styles } from "./styles";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { useCallback, useState } from "react";
import { ListHeader } from "../../components/ListHeader";
import { AppointmentProps, Appoitment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from "../../components/Background";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOITMENTS } from "../../configs/storage";
import { Load } from "../../components/Load";

export const Home = () => {
  const [category, setCategory] = useState("");
  const [loadingAppointments, setLoadAppointments] = useState(true);

  const [appointments, setAppointmnets] = useState<AppointmentProps[]>([]);

  const navigation = useNavigation();

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  };

  const handleAppointmentDetails = (guildSelected: AppointmentProps) => {
    navigation.navigate("AppointmentDetails", {
      guildSelected,
    });
  };
  const handleAppointmentCreate = () => {
    navigation.navigate("AppointmentCreate");
  };

  const loadAppoitments = async () => {
    const response = await AsyncStorage.getItem(COLLECTION_APPOITMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointmnets(storage.filter((item) => item.category === category));
    } else {
      setAppointmnets(storage);
    }
    setLoadAppointments(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadAppoitments();
    }, [category])
  );

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

      {loadingAppointments ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Partidas agendadas"
            subtitle={`Total ${appointments.length}`}
          />
          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appoitment
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            contentContainerStyle={{ paddingBottom: 69 }}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </Background>
  );
};
