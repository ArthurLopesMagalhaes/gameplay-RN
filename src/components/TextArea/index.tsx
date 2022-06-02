import { TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./styles";

export const TextArea = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput
      style={styles.container}
      {...rest}
      maxLength={100}
      numberOfLines={5}
    />
  );
};
