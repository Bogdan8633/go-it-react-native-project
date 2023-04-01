import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  console.log("route.params ---> ", route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts ---> ", posts);

  return (
    <>
      <TouchableOpacity style={styles.logout}>
        <Ionicons name="ios-log-out-outline" size={24} color="#BDBDBD" />
      </TouchableOpacity>
      <View style={styles.container}>
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: item.photo }}
                style={{ width: 350, height: 240 }}
              />
              <View style={styles.postMenu}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Comments")}
                >
                  <FontAwesome5 name="comments" size={38} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Map")}>
                  <EvilIcons name="location" size={38} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        {/* <Button title="go to map" onPress={() => navigation.navigate("Map")} />
        <Button
          title="go to comments"
          onPress={() => navigation.navigate("Comments")}
        /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  logout: {
    marginLeft: "auto",
    marginRight: 16,
  },
  postMenu: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
});

export default DefaultScreenPosts;
