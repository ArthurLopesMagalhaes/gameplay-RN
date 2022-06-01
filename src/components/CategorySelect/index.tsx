import { FlatList, ScrollView } from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
import { Category } from "../Category";
import { styles } from "./styles";

interface Props {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export const CategorySelect = ({
  categorySelected,
  setCategory,
  hasCheckBox = false,
}: Props) => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((item) => (
        <Category
          key={item.id}
          title={item.title}
          icon={item.icon}
          checked={item.id === categorySelected}
          onPress={() => setCategory(item.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  );
};
