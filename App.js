import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { v1 as uuidv1 } from "uuid";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState({});

  const addTask = () => {
    if (newTask !== "") {
      const ID = uuidv1();
      const taskObject = {
        [ID]: {
          id: ID,
          textValue: newTask,
          done: false,
          at: Date.now(),
          createdAt: Date.now(),
        },
      };
      setNewTask("");
      setTasks((prevState) => {
        const newTasks = {
          ...prevState,
          ...taskObject,
        };
        console.log("current list of tasks" + JSON.stringify(newTasks));
        return { ...newTasks };
      });
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
        value={newTask}
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
