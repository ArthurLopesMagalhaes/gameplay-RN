import { View, Text, Image } from "react-native";
import { useAuth } from "../../contexts/authContext";
import { Avatar } from "../Avatar";
import { ButtonAdd } from "../ButtonAdd";
import { styles } from "./styles";

export const Profile = () => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Avatar urlImage={user.avatar} />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de Vitória</Text>
      </View>
    </View>
  );
};
