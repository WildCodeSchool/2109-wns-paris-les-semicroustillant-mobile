import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import ProgressBar from "react-native-animated-progress";

const ProgressBarComp = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        marginHorizontal: "5%",
      }}
    >
      <View>
        <Text style={{ marginBottom: 5 }}>Advancement:</Text>
        <ProgressBar
          animated
          progress={60}
          height={30}
          indeterminate={isLoading ? true : false}
          backgroundColor="#F50D51"
        />
      </View>
    </View>
  );
};
export default ProgressBarComp;
