import { Pressable, StyleSheet } from "react-native"
import { Colors } from "../constants/Colors"

function ThemedButton({ style, ...props }) {

    return (
        <Pressable
            style={({ pressed }) => [styles.btn, pressed && StyleSheet.pressed, style]}
            {...props}
        />
    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 18,
        boarderRadius: 6,
        marginVertical: 10
    },
    pressed: {
        opacity: 0.8
    }
})

export default ThemedButton