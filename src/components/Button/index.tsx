import { Text } from "react-native";
import { styles } from "./styles";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
  title: string;
}

export const Button = ({ title, ...rest }: Props) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};
