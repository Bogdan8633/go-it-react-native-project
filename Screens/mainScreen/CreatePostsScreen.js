import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

import { AntDesign } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log("location --->", location);
    setPhoto(photo.uri);
    console.log("photo", photo);
  };

  const sendPhoto = () => {
    console.log("navigation", navigation);
    navigation.navigate("DefaultScreen", { photo });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log("status camera Permissions ---> ", status);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ width: 70, height: 70, borderRadius: 8 }}
            />
          </View>
        )}
        <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
          <AntDesign name="camera" size={32} color="white" />
        </TouchableOpacity>
      </Camera>
      <View style={styles.inputContainers}>
        <TextInput style={styles.input} placeholder="Назва" />
        <TextInput style={styles.input} placeholder="Локація" />
      </View>
      <View>
        <TouchableOpacity onPress={sendPhoto} style={styles.sendContainer}>
          <Text style={styles.sendText}>Опублікувати</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
  },
  camera: {
    height: "50%",
    borderRadius: 10,
    marginHorizontal: 2,
    // flex: 1,
    // marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  snapContainer: {
    borderWidth: 1,
    borderColor: "#FFF",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainers: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    color: "#212121",
    fontSize: 16,
    padding: 16,
    marginBottom: 32,
  },
  sendContainer: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginHorizontal: 16,
  },
  sendText: {
    color: "#FFFFFF",
    fontSize: 19,
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default CreatePostsScreen;
