/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Settings: undefined;
  UserEdit: { _id: string };
  NotFound: undefined;
  DetailedTask: { _id: string };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Login: undefined;
  Projects: undefined;
  // Tasks: undefined;
  Tasks: undefined;
  Users: undefined;
  UserEdit: { _id: string };
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

/* ------------------------------- */
/* ------- USER INTERFACES ------- */
/* ------------------------------- */
export interface IUser {
  _id: string;
  firstname: string;
  lastname: string;
  email?: string;
  hash?: string;
  role?: string;
  position: string;
}

export interface IUserWithAvatar extends IUser {
  avatarSize?: number;
}

export interface IUserWithAvatarAndNavigation extends IUserWithAvatar {
  navigation?: { navigate: (name: string, params: { _id: string }) => void };
}

/* ------------------------------- */
/* ----- PROJECTS INTERFACES ----- */
/* ------------------------------- */
export interface IProject {
  _id: string;
  name: string;
  projectOwner: string;
  members?: string[];
}
