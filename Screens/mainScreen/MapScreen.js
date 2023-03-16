import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Це сторінка майбутнього MapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapScreen;
