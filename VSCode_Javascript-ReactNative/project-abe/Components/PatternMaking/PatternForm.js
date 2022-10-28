import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import GenButton from "../Buttons/GenButton";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import styles from "../../AppStyling/Styles";

export default function PatternForm(){
    //two states: view, edit
        //in view - edit, export
        //in edit - save, delete
    //all patterns have:
        //title
        //finished checkbox
    //default sections:
        //(all will have checkboxes to not include in final pattern/hide in viewing)
        //(can be drag and drop to reorder sections)
        //(user settings can edit default section titles)
        //(user settings can edit default sections for new pattern)
        //(section names can be edited)
        //Description
        //Materials
            //Bullet points, can add
        //Stitches
            //drop down to stitch library
        //Finished Measurements
        //Instructions
            //add row
            //add paragraph
            //add header text
            //add picture
    //can add
        //section text
        //header text
        //picture
        //list item


    return(
        <View>
            <Text style={styles.sectionHeader}>Pattern Form</Text>
            <View>
                
            </View>
        </View>
        
    )
}