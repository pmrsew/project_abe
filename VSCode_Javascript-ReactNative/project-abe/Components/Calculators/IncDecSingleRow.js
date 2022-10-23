import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

//styling imports
import styles from "../../AppStyling/Styles";

//component imports
import GenButton from "../Buttons/GenButton";
import ChoiceButton from "../Buttons/ChoiceButton";

export default function IncDecCalc() {
    const [incDec, setIncDec] = useState('inc')

    function decClick() {
        setIncDec('dec')
    }

    function incClick() {
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
        setResult('Result will display here after calculation')
    }


    return (
        <View>
            <Text style={styles.sectionHeader}>Calculator for Single Increases and Decreases</Text>
            <View style={incDecCalcStyles.contentContainer}>
                <View style={styles.multiButtonRow}>
                    <ChoiceButton pressFunc={incClick} btnText='Increase' active={incDec === 'inc' ? true : false} />
                    <View style={{ width: 10 }} />
                    <ChoiceButton pressFunc={decClick} btnText='Decrease' active={incDec === 'dec' ? true : false} />
                </View>

                <Text>Starting Stitch Count</Text>
                <TextInput style={styles.textInput} value={startCount} onChangeText={setStartCount} keyboardType='number-pad' />

                <Text>Stitches to <Text style={styles.importantText}>{incDec === "inc" ? "increase" : "decrease"}</Text> by</Text>
                <TextInput style={styles.textInput} value={stitchDif} onChangeText={setStitchDif} keyboardType='number-pad' />

                <Text>Ending stitch count would be <Text style={styles.importantText}>{endCount()}</Text></Text>

                <GenButton pressFunc={calcClick} btnText='Calculate' />

                <Text style={incDecCalcStyles.resultBox}>{result}</Text>

                <View style={styles.multiButtonRow}>
                    <GenButton pressFunc={copyClick} btnText='Copy' />
                    <View style={{ width: 10 }} />
                    <GenButton pressFunc={resetClick} btnText='Reset' />
                </View>
            </View>
        </View>
    )
}

const incDecCalcStyles = StyleSheet.create({
    contentContainer: {
        margin: 10
    },
    resultBox: {
        height: 200,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        padding: 5,
        textAlignVertical: 'center'
    }
})