import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { CheckBox } from "react-native-elements";

import { StyleSheet } from "react-native";
import { View } from "./Themed";

import myColors from "../constants/Colors";

const FiltersTasks = ({}) => {
  DropDownPicker.setTheme("DARK");

  interface IItem {
    label: string;
    value: string;
    id: string;
  }

  type TValue = string | number | boolean;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<TValue[] | null>([]);
  const [items, setItems] = useState<IItem[]>([
    { label: "Apple", value: "apple", id: "tbgvrfced529854" },
    { label: "Banana", value: "banana", id: "tbgvrfced529gvrfcd" },
  ]);

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  return (
    <View style={styles.container}>
      {/* TODO: Change colors for dropdown. Ex: checkboxes inside it */}
      <DropDownPicker
        translation={{
          SELECTED_ITEMS_COUNT_TEXT: "{count} project(s) have been selected",
          NOTHING_TO_SHOW: "No projects available",
        }}
        placeholder="All projects"
        multiple={true}
        min={0}
        max={5}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <View style={{ backgroundColor: "transparent" }}>
        <CheckBox
          containerStyle={styles.firstCheckboxContainerStyle}
          wrapperStyle={styles.checkboxWrapperStyle}
          checkedColor="#F50D51"
          uncheckedColor="#F50D51"
          center
          title="Assigned to me only"
          checked={check1}
          onPress={() => setCheck1(!check1)}
        />
        <CheckBox
          containerStyle={styles.secondCheckboxContainerStyle}
          uncheckedColor="#F50D51"
          checkedColor="#F50D51"
          wrapperStyle={styles.checkboxWrapperStyle}
          center
          title="Hide done"
          checked={check2}
          onPress={() => setCheck2(!check2)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  firstCheckboxContainerStyle: {
    borderColor: myColors.projectColors.text,
    marginTop: 20,
    backgroundColor: myColors.dark.EBONY_CLAY,
  },
  secondCheckboxContainerStyle: {
    borderColor: myColors.projectColors.text,
    backgroundColor: myColors.dark.EBONY_CLAY,
  },
  checkboxWrapperStyle: { display: "flex", justifyContent: "flex-start" },
});

export default FiltersTasks;
