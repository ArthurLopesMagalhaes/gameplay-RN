import { styles } from "./styles";

import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";

interface Props {
  children: ReactNode;
}

export const Background = ({ children }: Props) => {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
};
