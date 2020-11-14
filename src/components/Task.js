import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./task-styles";
import { FontAwesome } from '@expo/vector-icons';

export default function Task(props) {
    return (
    <View style={styles.container}> 
        <Text style={styles.text}>
            {props.task.text}
        </Text>
        <TouchableOpacity onPressOut={() => props.deleteTask(props.task.id)} >
            <View style={styles.button}>
                <FontAwesome name="trash" size={24} color="red" />
            </View>
        </TouchableOpacity>
    </View>
    )
};