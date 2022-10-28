import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import GenButton from "../Buttons/GenButton";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import CalculatorsMenu from "./CalculatorsMenu";

export default function HomeMenu() {
    return (
        <View style={homeMenuStyles.contentContainer}>
                <Text style={homeMenuStyles.title}>Welcome!</Text>
                {/* <GenButton pressFunc={testClick} btnText='Pattern Drafting' />
                <GenButton pressFunc={testClick} btnText='Pattern Tracking' />
                <GenButton pressFunc={testClick} btnText='Library' />
                <GenButton pressFunc={testClick} btnText='Calculators' /> */}
                <Link to="/pattern-making">
                    <Text>Pattern Making</Text>
                </Link>
                <Link to="/calculators">
                    <Text>Calculators</Text>
                </Link>

                
            </View>


    )
}

const homeMenuStyles = StyleSheet.create({
    contentContainer: {
        margin: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20
    },
    button: {

    }
})