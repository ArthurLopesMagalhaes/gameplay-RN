import { TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

export const SmallInput = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput style={styles.container} keyboardType="numeric" {...rest} />
  );
};
