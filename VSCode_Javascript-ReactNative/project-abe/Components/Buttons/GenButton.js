import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import styles from "../../AppStyling/Styles";

export default function GenButton({pressFunc, btnText}) {
    return (
        <TouchableHighlight onPress={pressFunc}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{btnText}</Text>
            </View>
        </TouchableHighlight>
    )
}