import { StyleSheet, Pressable, Text } from "react-native"
import { Link } from "expo-router"
import { Colors } from "../../constants/Colors"

import  ThemedText  from "../../components/ThemedText"
import  ThemedView  from "../../components/ThemedView"
import ThemedButton from "../../components/ThemedButton"
import Spacer from "../../components/Spacer"

const Register = () => {
    const handlesubmit = () => {
        console.log('Register form submitted')
    }

    return (
        <ThemedView style={styles.container}>

                <Spacer />
                <ThemedText title={true} style={styles.title}>
                     Register
                </ThemedText>

                 <ThemedButton onPress={handlesubmit} >
                    <Text style={{ color: '#f2f2f2' }}>Register</Text>
                </ThemedButton>

            <Spacer height={100} />
            <Link href='/login'>
                <ThemedText style={{textAlign: 'center'}} >
                    Login Instead
                </ThemedText>
            </Link>

        </ThemedView>
        
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginbutton: 30
    },
     btn: {
            backgroundColor: Colors.primary,
            padding: 15,
            borderRadius: 5,
        },
    pressed: {
        opacity: 0.8
    }
})