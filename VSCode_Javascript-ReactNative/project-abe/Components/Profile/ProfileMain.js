import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function ProfileMain() {
    //Header
    //Avatar
    //Email
    //Profile Details
    return (
        <View>
            <View style={profileMainStyles.header}>
                <View style={profileMainStyles.avatar} />
                <Text>User Email</Text>
            </View>
            <View>
                <Button
                    title="Press Me"
                />
            </View>
        </View>
    )
}

const profileMainStyles = StyleSheet.create({
    header: {
        backgroundColor: 'gray',
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'green',
        marginBottom: 10
    }
});