import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { createTask } from "./helpers/tasks";
import { styles } from "./styles";

export default function Main() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState({});

  const addTask = () => {
    if (newTask !== "") {
      const taskObject = createTask(newTask);
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
