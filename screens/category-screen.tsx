import { FC } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import CategoryGridTile from "../components/category-gird-tile";
import { CATEGORIES } from "../data/dummy-data";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../typings";
// import { Root } from "@react-navigation/native"

// navigations

interface ICategoryItem {
  id: string;
  title: string;
  color: string;
}

type Props = NativeStackScreenProps<RootStackParamList, "MealsCategories">;

const CategoryScreen: FC<Props> = ({ navigation }) => {
  function renderCategoryItem({ item }: ListRenderItemInfo<ICategoryItem>) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { id: item.id, title: item.title });
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoryScreen;
