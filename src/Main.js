import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect} from "react";
import { Text, TextInput, View, ScrollView } from "react-native";
import Task from "./components/Task";
import taskStore from "./database/TaskStore";
import { createTask } from "./helpers/tasks";
import { styles } from "./styles";

export default function Main() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState({});

  const loadTasks = async () => {
    var allTasks = await taskStore.getAllTasks();
    setTasks(allTasks);
  };

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
      taskStore.saveTasks(newTasks);
      return { ...newTasks };
    });
  };
  const deleteTask = id => {
    setTasks(prevState => {
      const tasks = prevState;
      console.log(id);
      delete tasks[id];
      taskStore.saveTasks(tasks);
      return { ...tasks };
    });
  };

  
  useEffect(() => {
    loadTasks()
  }, []);

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
