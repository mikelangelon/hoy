import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask !== "") {
      console.log("adding task " + newTask);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Tasker</Text>

      <TextInput
        style={styles.input}
        placeholder={"Add a new task"}
        onChangeText={(text) => setNewTask(text)}
        onSubmitEditing={addTask}
        returnKeyType={"done"}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    fontSize: 36,
    fontWeight: "250",
  },
  input: {
    padding: 20,
    borderBottomWidth: 2,
    fontSize: 18,
  },
});
