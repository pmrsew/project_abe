import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import PatternForm from "../PatternMaking/PatternForm";

import styles from "../../AppStyling/Styles";

export default function PatternMakingMenu() {
    return (
        <View>
                <Text style={styles.menuTitle}>Pattern Making</Text>
                <Link to='/pattern-form'>
                    <Text style={styles.menuButton}>Pattern Form</Text>
                </Link>

                {/* <Routes>
                    <Route path='/pattern-form' element={<PatternForm />} />
                </Routes> */}
            </View>


    )
}