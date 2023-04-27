import React from "react";
import { TextInput, Button, View } from "react-native";
import { styles } from './styles.js';


export const Input = ({ placeholder, value, onChangeText, buttonColor, buttonTitle, onHandleButton }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={text => onChangeText(text)}
            />
            <Button title={buttonTitle} color={buttonColor} onPress={onHandleButton} />
        </View>
    )
}

export default Input;
