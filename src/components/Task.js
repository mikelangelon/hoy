import React from "react";
import { View, Text } from "react-native";
import { styles } from "./task-styles";

export default function Task(props) {
    return (
    <View style={styles.container}> 
        <Text style={styles.text}>
            {props.task.text}
        </Text>
    </View>
    )
};