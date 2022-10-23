import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

//styling imports
import { activeButtonColor, inactiveButtonColor } from "../../AppStyling/Colors";

export default function IncDecCalc() {
    const [incDec, setIncDec] = useState('inc')
    const [decColor, setDecColor] = useState(inactiveButtonColor)
    const [incColor, setIncColor] = useState(activeButtonColor)

    function decClick() {
        setDecColor(activeButtonColor)
        setIncColor(inactiveButtonColor)
        setIncDec('dec')
    }

    function incClick() {
        setIncColor(activeButtonColor)
        setDecColor(inactiveButtonColor)
        setIncDec('inc')
    }

    const [startCount, setStartCount] = useState('')
    const [stitchDif, setStitchDif] = useState('')

    function endCount() {
        let endCountValue = '0'
        if (startCount === '' || stitchDif === '') {
            endCountValue = '0'
            return endCountValue
        }
        if (incDec === 'inc') {
            endCountValue = parseInt(startCount) + parseInt(stitchDif)
        } else {
            endCountValue = parseInt(startCount) - parseInt(stitchDif)
        }
        return endCountValue
    }

    const [result, setResult] = useState('Result will display here after calculation')

    function calcClick() {
        setResult('Calc has been clicked')
    }

    function copyClick() {
        
    }

    function resetClick() {
        setIncDec('inc')
        setStartCount('')
        setStitchDif('')
        setIncColor(activeButtonColor)
        setDecColor(inactiveButtonColor)
        setResult('Result will display here after calculation')
    }


    return (
        <View>
            <Text>Calculator for Single Increases and Decreases</Text>

            <View style={incDecCalcStyles.choiceButtons}>
                <Button
                    title="Increase"
                    onPress={incClick}
                    color={incColor}
                />
                <View style={{ width: 10 }} />
                <Button
                    title="Decrease"
                    onPress={decClick}
                    color={decColor}
                />
            </View>

            <Text>Starting Stitch Count</Text>
            <TextInput style={incDecCalcStyles.textInput} value={startCount} onChangeText={setStartCount} keyboardType='number-pad' />

            <Text>Stitches to <Text style={incDecCalcStyles.changingText}>{incDec === "inc" ? "increase" : "decrease"}</Text> by</Text>
            <TextInput style={incDecCalcStyles.textInput} value={stitchDif} onChangeText={setStitchDif} keyboardType='number-pad' />

            <Text>Ending stitch count would be <Text style={incDecCalcStyles.changingText}>{endCount()}</Text></Text>

            <Button
                title="Calculate"
                onPress={calcClick}
            />

            <Text style={incDecCalcStyles.resultBox}>{result}</Text>

            <View style={incDecCalcStyles.choiceButtons}>
                <Button
                    title="Copy"

                />
                <View style={{ width: 10 }} />
                <Button
                    title="Reset"
                    onPress={resetClick}
                />
            </View>
        </View>
    )
}




const incDecCalcStyles = StyleSheet.create({
    choiceButtons: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 5
    },
    changingText: {
        fontWeight: 'bold',
        color: 'red'
    },
    resultBox: {
        height: 200,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        padding: 5,
        textAlignVertical: 'center'
    }
})