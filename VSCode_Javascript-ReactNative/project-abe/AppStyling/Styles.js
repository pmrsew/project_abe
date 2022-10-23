import React, { useState } from "react";
import {StyleSheet} from "react-native";
import { primaryBtnColor, secondaryBtnColor, btnFontColor, greenFont, pageHeaderBGColor, mainBGColor} from "./Colors";

const styles = StyleSheet.create({
    importantText: {
        color: greenFont,
        fontWeight: 'bold'
    },

    sectionHeader: {
        width: '100%',
        color: mainBGColor,
        backgroundColor: pageHeaderBGColor,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 24
    },

    button: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: primaryBtnColor,
        borderWidth: .5,
        borderColor: btnFontColor
    },
    inactiveButton: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: secondaryBtnColor,
        borderWidth: .5,
        borderColor: btnFontColor
    },
    buttonText: {
        color: btnFontColor,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    multiButtonRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 5
    }
    
})

export default styles