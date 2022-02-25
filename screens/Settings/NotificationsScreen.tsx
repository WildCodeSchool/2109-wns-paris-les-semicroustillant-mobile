import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { Text, View } from "../../components/Themed";

export default function NotificationScreen() {
  function hideThisSheet() {
    const [isHide, setIsHide] = useState(false);
  }
  const [isHide, setIsHide] = useState(false);
  return (
    <View>
      {isHide ? (
        <View>
          <Text>Notification</Text>
        </View>
      ) : (
        <View>
          <Text></Text>
        </View>
      )}
    </View>
  );
}
