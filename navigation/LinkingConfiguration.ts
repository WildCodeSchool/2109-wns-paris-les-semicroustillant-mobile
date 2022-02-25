/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Login: {
            screens: {
              LoginScreen: "Login",
            },
          },
          Projects: {
            screens: {
              ProjectsScreen: "Projects",
            },
          },
          Tasks: {
            screens: {
              TasksScreen: "Tasks",
            },
          },
          Users: {
            screens: {
              UserScreen: "Users",
            },
          },
        },
      },
      DetailedTask: "DetailedTask",
      Settings: "Settings",
      UserEdit: "UserEdit",
      NotFound: "*",
    },
  },
};

export default linking;
