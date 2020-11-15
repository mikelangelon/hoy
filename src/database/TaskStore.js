import AsyncStorage from '@react-native-async-storage/async-storage';

class TaskStore {
  getAllTasks = async () => {
    try {
      const allTasks = await AsyncStorage.getItem('tasks');
      if (allTasks != "") {
        return JSON.parse(allTasks);
      }

    } catch (err) {
      console.log(err);
    }
    return {};
  };

  saveTasks = tasks => {
    const jsonValue = JSON.stringify(tasks)
    AsyncStorage.setItem('tasks', jsonValue);
  };
}
const taskStore = new TaskStore();
export default taskStore;