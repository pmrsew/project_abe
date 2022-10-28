import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import GenButton from "../Buttons/GenButton";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import CalculatorsMenu from "./CalculatorsMenu";
import styles from "../../AppStyling/Styles";

export default function HomeMenu() {
    return (
        <View style={homeMenuStyles.contentContainer}>
            <Text style={styles.menuTitle}>Home</Text>
            {/* <GenButton pressFunc={testClick} btnText='Pattern Drafting' />
                <GenButton pressFunc={testClick} btnText='Pattern Tracking' />
                <GenButton pressFunc={testClick} btnText='Library' />
                <GenButton pressFunc={testClick} btnText='Calculators' /> */}
            <Link to="/pattern-making">
                <Text style={styles.menuButton}>Pattern Making</Text>
            </Link>
            <Link to="/calculators">
                <Text style={styles.menuButton}>Calculators</Text>
            </Link>
        </View>


    )
}

const homeMenuStyles = StyleSheet.create({
    contentContainer: {
        margin: 10
    },
})