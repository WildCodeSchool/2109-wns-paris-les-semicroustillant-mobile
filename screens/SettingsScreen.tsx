import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  TextInput,
  Switch,
  PermissionsAndroid,
  Appearance,
  useColorScheme,
} from "react-native";
import React, { useState, useCallback } from "react";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import NotificationScreen from "./Settings/NotificationsScreen";
import {
  faBell,
  faLock,
  faShield,
  faCircleUser,
  faLifeRing,
  faCircleInfo,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

export default function SettingsScreen() {
  const [MenueHide, setMenueHide] = useState(true);
  const [NotifHide, setNotifHide] = useState(false);
  const [ConfHide, setconfHide] = useState(false);
  const [SecurHide, setSecureHide] = useState(false);
  const [AccountHide, setAccountHide] = useState(false);
  const [HelpHide, setHelpHide] = useState(false);
  const [AboutHide, setAboutHide] = useState(false);
  const [ThemaHide, setThemaHide] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const colorScheme = Appearance.getColorScheme();

  return (
    <View style={styles.container}>
      {MenueHide ? (
        <View>
          <TextInput style={styles.input} value="recherche" />
          <View style={styles.list}>
            <Text
              style={styles.text}
              onPress={() => {
                setNotifHide(true);
                setMenueHide(false);
              }}
            >
              <FontAwesomeIcon style={styles.icon} icon={faBell} />{" "}
              Notifications
            </Text>
            <Text
              onPress={() => {
                setconfHide(true);
                setMenueHide(false);
              }}
              style={styles.text}
            >
              <FontAwesomeIcon style={styles.icon} icon={faLock} />{" "}
              Confidentialité
            </Text>
            <Text
              onPress={() => {
                setSecureHide(true);
                setMenueHide(false);
              }}
              style={styles.text}
            >
              <FontAwesomeIcon style={styles.icon} icon={faShield} /> Sécurité
            </Text>
            <Text
              onPress={() => {
                setAccountHide(true);
                setMenueHide(false);
              }}
              style={styles.text}
            >
              <FontAwesomeIcon style={styles.icon} icon={faCircleUser} /> Compte
            </Text>
            <Text
              onPress={() => {
                setHelpHide(true);
                setMenueHide(false);
              }}
              style={styles.text}
            >
              <FontAwesomeIcon style={styles.icon} icon={faLifeRing} /> Aide
            </Text>
            <Text
              onPress={() => {
                setAboutHide(true);
                setMenueHide(false);
              }}
              style={styles.text}
            >
              <FontAwesomeIcon style={styles.icon} icon={faCircleInfo} /> A
              propos
            </Text>
          </View>
        </View>
      ) : (
        <View>
          <Text></Text>
        </View>
      )}
      <View>
        {NotifHide ? (
          <View>
            <Text>Notification</Text>
          </View>
        ) : (
          <View>
            <Text></Text>
          </View>
        )}
      </View>
      <View>
        {ConfHide ? (
          <View>
            <Text>Confidentiality</Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>
      <View>
        {SecurHide ? (
          <View>
            <Text>Security</Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>
      <View>
        {AccountHide ? (
          <View>
            <Text>Account</Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>
      <View>
        {HelpHide ? (
          <View>
            <Text>Help</Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>
      <View>
        {AboutHide ? (
          <View>
            <Text>About</Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  list: {
    padding: 15,
  },
  icon: {
    fontSize: 16,
    color: "#F50D51",
    marginRight: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
  titleSubMenue: {
    fontSize: 16,
    marginRight: 15,
  },
  containerGlobalSubMenu: {
    padding: 15,
  },
});
