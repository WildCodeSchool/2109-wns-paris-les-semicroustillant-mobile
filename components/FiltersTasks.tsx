import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { CheckBox } from "react-native-elements";

import { StyleSheet } from "react-native";
import { View } from "./Themed";

const FiltersTasks = () => {
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
    <View
      style={{
        display: "flex",
        margin: "auto",
        width: "90%",
        alignItems: "center",
      }}
    >
      <DropDownPicker
        // containerStyle={{ width: "90%" }}
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
      <View>
        <CheckBox
          containerStyle={{ marginTop: 10 }}
          wrapperStyle={{
            display: "flex",
            justifyContent: "flex-start",
          }}
          center
          title="Assigned to me only"
          checked={check1}
          onPress={() => setCheck1(!check1)}
        />
        <CheckBox
          wrapperStyle={{ display: "flex", justifyContent: "flex-start" }}
          center
          title="Hide done"
          checked={check2}
          onPress={() => setCheck2(!check2)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FiltersTasks;
