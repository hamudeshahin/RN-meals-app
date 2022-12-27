import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface IProps {
  duration?: number;
  complexity?: string;
  affordability?: string;
  color?: string;
}

const MealDetails: FC<IProps> = (props) => {
  return (
    <View style={styles.details}>
      <Text
        style={[props.color ? { color: props.color } : null, styles.detailItem]}
      >
        {props.duration}
      </Text>
      <Text
        style={[props.color ? { color: props.color } : null, styles.detailItem]}
      >
        {props.complexity?.toUpperCase()}
      </Text>
      <Text
        style={[props.color ? { color: props.color } : null, styles.detailItem]}
      >
        {props.affordability?.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default MealDetails;
