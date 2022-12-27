import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC, useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import IconButton from "../components/icon-button";
import MealDetails from "../components/meal-details";
import List from "../components/meal-details/list";
import SubTitle from "../components/meal-details/sub-title";
import { MEALS } from "../data/dummy-data";
import { RootStackParamList } from "../typings";

type Props = NativeStackScreenProps<RootStackParamList, "MealDetail">;

const MealDetailScreen: FC<Props> = ({ route, navigation }) => {
  const meal = MEALS.find((item) => item.id === route.params.id);

  const headerButtonHandler = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" onPress={headerButtonHandler} />;
      },
    });
  }, [navigation, headerButtonHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal?.imageUrl }} />
      <Text style={styles.title}>{meal?.title}</Text>
      <MealDetails
        duration={meal?.duration}
        affordability={meal?.affordability}
        complexity={meal?.complexity}
        color="#fff"
      />
      <View style={styles.listOuter}>
        <View style={styles.listContainer}>
          <SubTitle title="Ingredients" />
          <List list={meal?.ingredients} />

          <SubTitle title="Steps" />
          <List list={meal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    color: "#FFF",
    textAlign: "center",
  },
  listOuter: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

export default MealDetailScreen;
