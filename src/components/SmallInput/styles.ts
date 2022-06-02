import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 48,
    backgroundColor: theme.colors.secondary40,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    borderRadius: 8,
    textAlign: "center",
    marginTop: 12,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
  },
});
