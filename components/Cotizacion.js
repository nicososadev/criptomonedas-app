import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Cotizacion = ({response}) => {
    
    if(Object.keys(response).length === 0) return null

    return (
        <View style={styles.response}>
            <Text style={styles.precio}>Precio: {' '}
                <Text style={styles.span}>{response.PRICE}</Text>
            </Text>
            <Text style={styles.text}>Precio más alto del día: {' '}
                <Text style={styles.span}>{response.HIGHDAY}</Text>
            </Text>
            <Text style={styles.text}>Precio más bajo del día: {' '}
                <Text style={styles.span}>{response.LOWDAY}</Text>
            </Text>
            <Text style={styles.text}>Variación de las últimas 24hs: {' '}
                <Text style={styles.span}>{response.CHANGEPCT24HOUR}%</Text>
            </Text>
            <Text style={styles.text}>Última actualización: {' '}
                <Text style={styles.span}>{response.LASTUPDATE}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    response: {
        backgroundColor: '#5E49E2',
        padding: 20,
        marginTop: 15
    },
    text: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        fontSize: 15,
        marginBottom: 5
    },
    precio: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        fontSize: 25,
        marginBottom: 5
    },
    span: {
        fontFamily: 'Lato-Black'
    }
})