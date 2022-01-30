import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, TextInput, TouchableHighlight } from 'react-native';
import uuid from 'react-native-uuid';
import { useState } from "react";

export default function TodoScreen({ navigation }) {
    const [tasks, setTasks] = useState([]);
    const [task_input, setTaskInput] = useState("");
    const deleteTask = (task) => {
        const task_index = tasks.findIndex((t) => task.id === t.id);
        const new_tasks = [...tasks];
        new_tasks.splice(task_index, 1);
        setTasks(new_tasks);
    };
    const moveTask = (task) => {
        const task_index = tasks.findIndex((t) => task.id === t.id);
        const new_tasks = [...tasks];
        new_tasks[task_index].done = !task.done;
        setTasks(new_tasks);
    };
    const addTask = () => {
        if (!task_input.length)
            return;
        const new_tasks = [...tasks];
        new_tasks.push({
            "id": uuid.v4(),
            "title": task_input,
            "done": false
        });
        setTaskInput("");
        setTasks(new_tasks);
    };
    const renderTasks = ({ item }) => {
        return (
            <View key={item.id} style={styles.task}>
                <Text style={{...styles.small_text, flex: 1}}>{item.title}</Text>
                <TouchableHighlight underlayColor='transparent' onPress={moveTask.bind(this, item)}>
                    <View style={styles.move_button}>
                        <Text>Move</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='transparent' onPress={deleteTask.bind(this, item)}>
                    <View style={styles.delete_button}>
                        <Text>Delete</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tasks_section}>
                <Text style={styles.title}>Task(s) to do:</Text>
                <FlatList
                    data={tasks.filter((task) => !task.done)}
                    renderItem={renderTasks}
                />
            </View>
            <View style={styles.tasks_section}>
                <Text style={styles.title}>Task(s) done:</Text>
                <FlatList
                    data={tasks.filter((task) => task.done)}
                    renderItem={renderTasks}
                />
            </View>
            <View style={styles.bottom_section}>
                <View style={styles.task_form}>
                    <TextInput style={styles.text_input} placeholder='Name of your task...' maxLength={32} value={task_input} onChangeText={setTaskInput} onSubmitEditing={addTask} />
                    <TouchableHighlight underlayColor='transparent' onPress={addTask.bind(this)}>
                        <View style={styles.create_button}>
                            <Text>Create task</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 35 : 0,
        backgroundColor: "#D4FBFF"
    },
    title_section: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: "#5C8C91"
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    content_section: {
        flex: 5,
        backgroundColor: "#A2D9DF"
    },
    tasks_section: {
        flex: 2.5
    },
    bottom_section: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowColor: '#000000',
        elevation: 4
    },
    task_form: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text_input: {
        flex: 5,
        borderBottomWidth: 2
    },
    create_button: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#2EDB81'
    },
    task: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#5C8C91',
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    move_button: {
        textAlign: 'center',
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: '#D5D8D8'
    },
    delete_button: {
        textAlign: 'center',
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: "#FF614F"
    },
    small_text: {
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
});