import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export const Load = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};
