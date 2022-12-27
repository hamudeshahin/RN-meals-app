import { FC, useLayoutEffect } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ListRenderItemInfo,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../typings";
import { IMeal } from "../models/meal";
import MealItem from "../components/meal-item";

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

const MealsOverviewScreen: FC<Props> = ({ route, navigation }) => {
  // get meals that should be displayed
  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(route.params.id) >= 0;
  });

  // render item function for flat list
  const renderMealItem = ({ item }: ListRenderItemInfo<IMeal>) => {
    return (
      <MealItem
        mealItem={item}
        onPress={() => navigation.navigate("MealDetail", { id: item.id })}
      />
    );
  };

  useLayoutEffect(() => {
    // set header title of screen
    const categoryTitle = CATEGORIES.find(
      (item) => item.id === route.params.id
    )?.title;
    navigation.setOptions({ title: categoryTitle });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
