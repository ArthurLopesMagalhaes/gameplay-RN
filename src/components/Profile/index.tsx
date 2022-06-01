import { View, Text, Image } from "react-native";
import { Avatar } from "../Avatar";
import { ButtonAdd } from "../ButtonAdd";
import { styles } from "./styles";

export const Profile = () => {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/ArthurLopesMagalhaes.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Arthur</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de Vitória</Text>
      </View>
    </View>
  );
};
