import { StyleSheet } from "react-native";
import { View } from "../components/Themed";

import { RootTabScreenProps } from "../types";

import FiltersTasks from "../components/FiltersTasks";
export default function TasksScreen({
  navigation,
}: RootTabScreenProps<"Tasks">) {
  return (
    <View style={styles.container}>
      <FiltersTasks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
