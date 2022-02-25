import { Text, Card } from "react-native-elements";

import { Pressable, StyleSheet } from "react-native";
import { View } from "./Themed";

import myColors from "../constants/Colors";

import useColorScheme from "../hooks/useColorScheme";

interface IMyColors {
  dark: {
    EBONY_CLAY: string;
    background: string;
    tabIconDefault: string;
    tabIconSelected: string;
    text: string;
    tint: string;
  };
  light: {
    background: string;
    tabIconDefault: string;
    tabIconSelected: string;
    text: string;
    tint: string;
  };
  projectColors: {
    tint: string;
  };
}

const TaskCard = ({
  navigation,
  _id,
  subject,
  project,
  status,
  assignee,
  due_date,
}: {
  navigation: { navigate: (name: string, params: { _id: string }) => void };

  _id: string;
  subject: string;
  project: string;
  status: string;
  assignee: string;
  due_date: string;
}) => {
  const colorScheme = useColorScheme();
  console.log("here", myColors.dark.EBONY_CLAY);

  const ColorBackground = myColors.dark.EBONY_CLAY;
  return (
    <Pressable onPress={() => navigation.navigate("DetailedTask", { _id })}>
      <Card containerStyle={styles.containerCard}>
        <Card.Title>{project}</Card.Title>
        <Card.Divider color={myColors.projectColors.text} />
        <View style={styles.container}>
          <View style={styles.leftColumn}>
            <View style={styles.notColoredLine}>
              <Text style={styles.textColoredLine}>Subject</Text>
            </View>

            <View style={styles.coloredLine}>
              <Text style={styles.textColoredLine}>Status</Text>
            </View>
            <View style={styles.notColoredLine}>
              <Text style={styles.textColoredLine}>Assignee</Text>
            </View>
            <View style={styles.coloredLine}>
              <Text style={styles.textColoredLine}>Due date</Text>
            </View>
          </View>
          <View style={styles.rightColumn}>
            <View style={styles.notColoredLine}>
              <Text style={styles.textColoredLine}>{subject}</Text>
            </View>
            <View style={styles.coloredLine}>
              <Text style={styles.textColoredLine}>{status}</Text>
            </View>
            <View style={styles.notColoredLine}>
              <Text style={styles.textColoredLine}>{assignee}</Text>
            </View>
            <View style={styles.coloredLine}>
              <Text style={styles.textColoredLine}>{due_date}</Text>
            </View>
          </View>
        </View>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    marginTop: 20,
    borderColor: myColors.projectColors.tint,
    backgroundColor: myColors.dark.EBONY_CLAY,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  coloredLine: {
    width: "100%",

    backgroundColor: myColors.dark.background,

    padding: 2,
  },
  notColoredLine: {
    padding: 2,
    width: "100%",
    backgroundColor: myColors.dark.tabIconDefault,
  },
  textColoredLine: { color: myColors.projectColors.text },
  leftColumn: { display: "flex", width: "30%", alignItems: "flex-start" },
  rightColumn: { display: "flex", width: "70%", alignItems: "flex-start" },
});

export default TaskCard;
