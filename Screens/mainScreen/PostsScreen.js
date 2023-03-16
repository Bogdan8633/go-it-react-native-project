import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const PostsScreen = () => {
  return (
    <>
      <TouchableOpacity style={styles.logout}>
        <Ionicons name="ios-log-out-outline" size={24} color="#BDBDBD" />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text>Це сторінка майбутнього PostsScreen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logout: {
    marginLeft: "auto",
    marginRight: 16,
  },
});

export default PostsScreen;
