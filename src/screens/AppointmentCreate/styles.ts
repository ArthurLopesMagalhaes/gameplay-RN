import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  select: {
    width: "100%",
    height: 68,
    flexDirection: "row",
    alignItems: "center",
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    paddingRight: 25,
    overflow: "hidden",
  },
  selectBody: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  fields: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 28,
  },
  caracteresLimit: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  },
  footer: {
    marginVertical: 20,
    marginBottom: 56,
  },
});
