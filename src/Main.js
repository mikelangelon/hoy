import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, TextInput, View, ScrollView } from "react-native";
import Task from "./components/Task";
import { createTask } from "./helpers/tasks";
import { styles } from "./styles";

export default function Main() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState({});

  const addTask = () => {
    if (newTask == "") {
      return;
    }
    const taskObject = createTask(newTask);
    setNewTask("");
    setTasks((prevState) => {
      const newTasks = {
        ...prevState,
        ...taskObject,
      };
      return { ...newTasks };
    });
  };
  const deleteTask = id => {
    console.log(id);
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

      <ScrollView>
        {Object.values(tasks).map(
          t => <Task key={t.id} task={t} deleteTask={deleteTask}/>
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
