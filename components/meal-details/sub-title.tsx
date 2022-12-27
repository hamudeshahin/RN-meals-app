import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface IProps {
  title: string;
}

const SubTitle: FC<IProps> = ({ title }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
});

export default SubTitle;
