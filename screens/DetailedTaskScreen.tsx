import React, { useState } from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";
import { View } from "../components/Themed";

import { RootTabScreenProps } from "../types";

import FiltersTasks from "../components/FiltersTasks";
import ProgressBar from "../components/ProgressBar";

const TasksScreen = () => {
  return <ProgressBar />;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 190,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
});

export default TasksScreen;
