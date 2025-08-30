import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Checklist = () => {
  const [tasks, setTasks] = useState([
    { id: '1', name: 'Book Venue', completed: false },
    { id: '2', name: 'Hire Photographer', completed: false },
    { id: '3', name: 'Catering', completed: false },
    { id: '4', name: 'Mehendi Ceremony', completed: false },
    { id: '5', name: 'Sangeet Ceremony', completed: false },
    { id: '6', name: 'Honeymoon Booking', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');
  const [editTaskId, setEditTaskId] = useState<string | null>(null);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    if (editTaskId) {
      setTasks(tasks.map(task =>
        task.id === editTaskId ? { ...task, name: newTask } : task
      ));
      setEditTaskId(null);
    } else {
      setTasks([...tasks, { id: Date.now().toString(), name: newTask, completed: false }]);
    }

    setNewTask('');
  };

  const handleEditTask = (id: string, name: string) => {
    setEditTaskId(id);
    setNewTask(name);
  };

  const handleToggleComplete = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💍 Wedding Checklist</Text>

      
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Enter a task..."
          value={newTask}
          onChangeText={setNewTask}
          style={styles.input}
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={handleAddTask} style={styles.button}>
          <Text style={styles.buttonText}>{editTaskId ? "Update" : "Add"}</Text>
        </TouchableOpacity>
      </View>

      
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.taskCard, item.completed && styles.taskCompletedCard]}>
            <TouchableOpacity onPress={() => handleToggleComplete(item.id)} style={{ flex: 1 }}>
              <Text style={[styles.taskText, item.completed && styles.completed]}>
                {item.name}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleEditTask(item.id, item.name)}>
              <Text style={styles.editBtn}>✏️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Checklist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2C3E50',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4F46E5',
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginLeft: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  taskCompletedCard: {
    backgroundColor: '#E6FFFA',
  },
  taskText: {
    fontSize: 16,
    color: '#111',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#16A34A',
    fontWeight: '600',
  },
  editBtn: {
    fontSize: 18,
    marginLeft: 12,
  },
});
