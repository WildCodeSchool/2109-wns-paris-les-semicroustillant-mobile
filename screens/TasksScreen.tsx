import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { View } from "../components/Themed";

import { RootTabScreenProps } from "../types";

import FiltersTasks from "../components/FiltersTasks";
import TaskCard from "../components/TaskCard";

import useColorScheme from "../hooks/useColorScheme";

export default function TasksScreen({
  navigation,
}: RootTabScreenProps<"Tasks">) {
  const colorScheme = useColorScheme();

  const [tasks, setTasks] = useState([
    {
      subject: "Subject1",
      project: "Project1",
      status: "Status1",
      assignee: "Assignee1",
      due_date: "20/04/1996",
    },
    {
      subject: "Subject2",
      project: "Project2",
      status: "Status2",
      assignee: "Assignee2",
      due_date: "20/04/1996",
    },
    {
      subject: "Subject3",
      project: "Project3",
      status: "Status3",
      assignee: "Assignee3",
      due_date: "20/04/1996",
    },
    {
      subject: "Subject4",
      project: "Project4",
      status: "Status4",
      assignee: "Assignee4",
      due_date: "20/04/1996",
    },
  ]);

  const _id: string = "62158c4150850e86b4f79c0b";

  return (
    <View style={styles.container}>
      <FiltersTasks />
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.subject}
        renderItem={(itemData) => {
          return (
            <TaskCard
              _id={_id}
              navigation={navigation}
              subject={itemData.item.subject}
              project={itemData.item.project}
              assignee={itemData.item.assignee}
              status={itemData.item.status}
              due_date={itemData.item.due_date}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
});
