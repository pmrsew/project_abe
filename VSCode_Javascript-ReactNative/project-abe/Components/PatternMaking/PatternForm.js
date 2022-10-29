import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import GenButton from "../Buttons/GenButton";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import styles from "../../AppStyling/Styles";
import ChoiceButton from "../Buttons/ChoiceButton";

export default function PatternForm() {
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

    function saveClick() {
        //TODO
    }

    function deleteClick() {
        //TODO
    }


    return (
        <View>
            <Text style={styles.sectionHeader}>Pattern Form</Text>
            <View>
                <View>
                    <ChoiceButton pressFunc={saveClick} btnText='Save' />
                    <ChoiceButton pressFunc={deleteClick} btnText='Delete' />
                </View>
                <View>
                    <Text>Title</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Description</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Materials</Text>
                    <TouchableHighlight>
                        <View>
                            <Text>Add Material</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View>
                    <Text>Stitches Used</Text>
                </View>
                <View>
                    <Text>Finished Measurements</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Instructions</Text>
                    <TouchableHighlight>
                        <View>
                            <Text>Add Row</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View>
                            <Text>Add Picture</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View>
                            <Text>Add Header</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View>
                            <Text>Add Paragraph</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight>
                    <View>
                        <Text>Add Section</Text>
                    </View>
                </TouchableHighlight>
                <View>
                    <TouchableHighlight>
                        <View>
                            <Text>Add Section Title</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View>
                            <Text>Add Paragraph</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View>
                            <Text>Add List Item</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View>
                            <Text>Add Picture</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>
        </View>

    )
}