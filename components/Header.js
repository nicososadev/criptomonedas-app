import React from 'react'
import { Text, StyleSheet, Platform} from 'react-native'

export const Header = () => {
    
    return (
        <Text style={styles.header}>Criptomonedas</Text>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        fontFamily: 'Lato-Black',
        backgroundColor: '#5E49E2',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#FFF',
        marginBottom: 10
    }
})
