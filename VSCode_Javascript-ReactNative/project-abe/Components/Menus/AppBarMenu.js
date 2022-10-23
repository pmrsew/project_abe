import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";

//icons imports
import homeIcon from '../../assets/home-icon-FFFFFF.png'
import userSettingsIcon from '../../assets/user-settings-icon-FFFFFF.png'

//styling imports
import { navBarBGColor } from "../../AppStyling/Colors";

export default function AppBarMenu(){
    return(
        <View style={appBarMenuStyles.container}>
            <Image style={appBarMenuStyles.image} source={homeIcon} />
            <Image style={appBarMenuStyles.image} source={userSettingsIcon} />
        </View>
    )
}

const appBarMenuStyles = StyleSheet.create({
    container: {
        backgroundColor: navBarBGColor,
        height: 100,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: 10
    },
    image: {
        height: 35,
        width: 35
    }
})