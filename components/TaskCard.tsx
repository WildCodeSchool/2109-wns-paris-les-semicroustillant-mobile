import { Text, Card } from "react-native-elements";

import { Pressable, StyleSheet } from "react-native";
import { View } from "./Themed";

import myColors from "../constants/Colors";

import useColorScheme from "../hooks/useColorScheme";
import React from "react";

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

  const theme = colorScheme === "light" ? myColors.light : myColors.dark;
  const projectColors = myColors.projectColors;

  return (
    <Pressable onPress={() => navigation.navigate("DetailedTask", { _id })}>
      <Card containerStyle={styles(projectColors, theme).containerCard}>
        <Card.Title>{project}</Card.Title>
        <Card.Divider color={"black"} />
        <View style={styles(projectColors, theme).container}>
          <View style={styles(projectColors, theme).leftColumn}>
            <View style={styles(projectColors, theme).notColoredLine}>
              <Text style={styles(projectColors, theme).textColoredLine}>
                Subject
              </Text>
            </View>

            <View style={styles(projectColors, theme).coloredLine}>
              <Text style={styles(projectColors, theme).textColoredLine}>
                Status
              </Text>
            </View>
            <View style={styles(projectColors, theme).notColoredLine}>
              <Text style={styles(projectColors, theme).textColoredLine}>
                Assignee
              </Text>
            </View>
            <View style={styles(projectColors, theme).coloredLine}>
              <Text style={styles(projectColors, theme).textColoredLine}>
                Due date
              </Text>
            </View>
          </View>
          <View style={styles(projectColors, theme).rightColumn}>
            <View style={styles(projectColors, theme).notColoredLine}>
              <Text style={styles(projectColors, theme).textColoredLine}>
                {subject}
              </Text>
            </View>
            <View style={styles(projectColors, theme).coloredLine}>
              <Text style={styles(projectColors, theme).textColoredLine}>
                {status}
              </Text>
            </View>
            <View style={styles(projectColors, theme).notColoredLine}>
              <Text style={styles(projectColors, theme).textColoredLine}>
                {assignee}
              </Text>
            </View>
            <View style={styles(projectColors, theme).coloredLine}>
              <Text style={styles(projectColors, theme).textColoredLine}>
                {due_date}
              </Text>
            </View>
          </View>
        </View>
      </Card>
    </Pressable>
  );
};

const styles = (projectColors?: any, theme?: any) =>
  StyleSheet.create({
    containerCard: {
      marginTop: 20,
      borderColor: projectColors.tint,
      backgroundColor: theme.EBONY_CLAY,
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
    textColoredLine: { color: "white" },
    leftColumn: { display: "flex", width: "30%", alignItems: "flex-start" },
    rightColumn: { display: "flex", width: "70%", alignItems: "flex-start" },
  });

export default TaskCard;
