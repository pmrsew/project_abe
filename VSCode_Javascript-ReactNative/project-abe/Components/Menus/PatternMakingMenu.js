import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import PatternForm from "../PatternMaking/PatternForm";

export default function PatternMakingMenu() {
    return (
        <View>
                <Text>Pattern Making</Text>
                <Link to='/pattern-form'>
                    <Text>Pattern Form</Text>
                </Link>

                {/* <Routes>
                    <Route path='/pattern-form' element={<PatternForm />} />
                </Routes> */}
            </View>


    )
}