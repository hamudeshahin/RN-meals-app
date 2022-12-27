import { FC } from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IMeal } from "../models/meal";
import { IOnPress } from "./category-gird-tile";
import MealDetails from "./meal-details";

interface IProps {
  mealItem: IMeal;
  onPress?: IOnPress;
}

const MealItem: FC<IProps> = ({ mealItem, onPress }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ddd" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: mealItem.imageUrl }} />
            <Text style={styles.title}>{mealItem.title}</Text>
          </View>
          <MealDetails
            duration={mealItem.duration}
            affordability={mealItem.affordability}
            complexity={mealItem.complexity}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },

  buttonPressed: {
    opacity: 0.5,
  },
});

export default MealItem;
