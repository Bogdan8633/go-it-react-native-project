import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreenPosts from "../nestedScreens/DefaultScreenPosts";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreenPosts}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   Image,
// } from "react-native";

// import { Ionicons } from "@expo/vector-icons";

// const PostsScreen = ({ route }) => {
//   const [posts, setPosts] = useState([]);
//   console.log("route.params ---> ", route.params);

//   useEffect(() => {
//     if (route.params) {
//       setPosts((prevState) => [...prevState, route.params]);
//     }
//   }, [route.params]);
//   console.log("posts ---> ", posts);

//   return (
//     <>
//       <TouchableOpacity style={styles.logout}>
//         <Ionicons name="ios-log-out-outline" size={24} color="#BDBDBD" />
//       </TouchableOpacity>
//       <View style={styles.container}>
//         <FlatList
//           data={posts}
//           keyExtractor={(item, indx) => indx.toString()}
//           renderItem={({ item }) => (
//             <View
//               style={{
//                 marginBottom: 10,
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Image
//                 source={{ uri: item.photo }}
//                 style={{ width: 350, height: 240 }}
//               />
//             </View>
//           )}
//         />
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   logout: {
//     marginLeft: "auto",
//     marginRight: 16,
//   },
// });

// export default PostsScreen;
