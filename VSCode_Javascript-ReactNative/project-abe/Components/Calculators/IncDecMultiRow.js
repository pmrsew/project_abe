import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

//layout
//increase functionality
//decrease functionality
export default function IncDecCalc() {
    return (
        <View>
            <Text>Calculator for Increases and Decreases across multiple rows</Text>
            <Text>Starting Stitch Count</Text>
            <TextInput style={incDecCalcStyles.textInput} />
            <Text>Ending Stitch Count</Text>
            <TextInput style={incDecCalcStyles.textInput} />
            <Text>Rows Needed</Text>
            <Text>Note: If increase/decrease takes place in immediate next row, enter 1</Text>
            <TextInput style={incDecCalcStyles.textInput} />
        </View>
    )
}

const incDecCalcStyles = StyleSheet.create({
    choiceButtons: {
        flexDirection: 'row',
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1
    }
})