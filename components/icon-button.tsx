import { FC } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IOnPress } from "./category-gird-tile";

interface IProps {
  onPress?: IOnPress;
  color?: string;
  icon: keyof typeof Ionicons.glyphMap;
}

const IconButton: FC<IProps> = ({ icon, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <Ionicons name={icon} size={24} color={color ? color : "#ff0"} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.6,
  },
});

export default IconButton;
