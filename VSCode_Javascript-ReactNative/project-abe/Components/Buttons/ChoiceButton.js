import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import styles from "../../AppStyling/Styles";

export default function ChoiceButton({pressFunc, btnText, active}) {
    return (
        <TouchableHighlight onPress={pressFunc}>
            <View style={active ? styles.button : styles.inactiveButton}>
                <Text style={styles.buttonText}>{btnText}</Text>
            </View>
        </TouchableHighlight>
    )
}