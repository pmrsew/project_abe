import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

//styling imports
import styles from "../../AppStyling/Styles";

//component imports
import GenButton from "../Buttons/GenButton";
import ChoiceButton from "../Buttons/ChoiceButton";

export default function IncDecCalc() {
    const [incDec, setIncDec] = useState('inc')
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
        const stStart = parseInt(startCount)
        const stDif = parseInt(stitchDif)
        const stEnd = endCount()
        //will need catches for invalid cases:
            //empty entry
            //zero entry
            //decimal entry
            //negative endCount
        
        //amount of stitches from the starting row used in a single repetition
        const repLength = Math.floor(stStart/stDif)
        let resultString = ''

        if(stStart%stDif === 0){
            //amount of single stitches in a row per repetition
            //inc uses 1 stitch from starting row
            //dec uses 2 stitches from starting row
            const stRep = (incDec==='inc'?(repLength-1):(repLength-2))

            //since there's a clean division, the amount of stitches being inc/dec is the amount of repetitions needed
            if(incDec==='inc'){
                resultString = `[[stitch] into next ${stRep} stitch(es), 2[stitch] into next] ${stDif} time(s) (${stEnd})`
            }else{
                resultString = `[[Stitch] into next ${stRep} stitch(es), dec] ${stDif} time(s) (${stEnd})`
            }
        }else{
            //when division isn't clean, there will be two repetition patterns
            //first rep will match previously used formula
            const stRepA = (incDec==='inc'?(repLength-1):(repLength-2))
            //second rep will use one more stitch from the starting row
            //this prevents there being too many inc/dec when accounting for mod amount
            //and keeps inc/dec pretty even across the row
            const stRepB = (incDec==='inc'?(repLength):(repLength-1))
            //a single repetition now uses more stitches from the starting row
            const repCount = Math.floor(stStart/((repLength*2) + 1))
            //since division isn't clean, there will be remaining stitches to add after repetitions
            const stRemain = stStart%((repLength*2) + 1)

            if(incDec==='inc'){
                resultString = `[[stitch] into next ${stRepA} stitch(es), 2[stitch] into next, [stitch] into next ${stRepB} stitch(es), 2[stitch] into next] ${repCount} time(s), [stitch] into next ${stRemain} (${stEnd})`
            }else{
                resultString = `[[Stitch] into next ${stRepA} stitch(es), dec, [Stitch] into next ${stRepB} stitch(es), dec] ${repCount} time(s), [stitch] into next ${stRemain} (${stEnd})`
            }
        }
        setResult(resultString)
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
                    <ChoiceButton pressFunc={()=>setIncDec('inc')} btnText='Increase' active={incDec === 'inc' ? true : false} />
                    <View style={{ width: 10 }} />
                    <ChoiceButton pressFunc={()=>setIncDec('dec')} btnText='Decrease' active={incDec === 'dec' ? true : false} />
                </View>

                <Text>Starting Stitch Count</Text>
                <TextInput style={styles.textInput} value={startCount} onChangeText={setStartCount} keyboardType='number-pad' />

                <Text>Stitches to <Text style={styles.importantText}>{incDec === "inc" ? "increase" : "decrease"}</Text> by</Text>
                <TextInput style={styles.textInput} value={stitchDif} onChangeText={setStitchDif} keyboardType='number-pad' />

                <Text>Ending stitch count would be <Text style={styles.importantText}>{endCount()}</Text></Text>

                <GenButton pressFunc={calcClick} btnText='Calculate' />

                <Text style={incDecCalcStyles.resultBox}>{result}</Text>

                <View style={styles.multiButtonRow}>
                    {/* <GenButton pressFunc={copyClick} btnText='Copy' />
                    <View style={{ width: 10 }} /> */}
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