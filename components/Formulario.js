import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';

export const Formulario = ({ moneda, criptomoneda, setMoneda, setCriptomoneda, setLoaded }) => {

    const [criptomonedas, setCriptomonedas] = useState([])

    useEffect(() => {
        const APICall = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            try {
                let response = await fetch(url);
                let response_json = await response.json();
                setCriptomonedas(response_json.Data)
            } catch (error) {
                console.error(error);
            }
        };
        APICall()
    }, [])


    const monedaManager = (moneda) => {
        setMoneda(moneda)
    }

    const criptomonedaManager = (criptomoneda) => {
        setCriptomoneda(criptomoneda)
    }

    const cotizarMoneda = () => {
        if (moneda.trim() === '' || criptomoneda.trim() === ''){
            mostrarAlerta()
        } else {
            setLoaded(true)
            console.log('Cotizando...')
        }


    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Los campos son obligatorios',
            [
                { text: 'OK' }
            ]
        )
    }

    return (
        <View>
            <Text style={styles.label}>Moneda</Text>
            <Picker
                selectedValue={ moneda }
                onValueChange={ moneda => monedaManager(moneda) }
            >
                <Picker.Item label='- Seleccione -' value=""/>
                <Picker.Item label='Dolar Estadounidense' value="USD"/>
                <Picker.Item label='Euro' value="EUR"/>
                <Picker.Item label='Peso Argentino' value="ARG"/>
            </Picker>

            <Text style={styles.label}>Criptomoneda</Text>
            <Picker
                selectedValue={ criptomoneda }
                onValueChange={ criptomoneda => criptomonedaManager(criptomoneda) }
            >
                <Picker.Item label='- Seleccione -' value=""/>
                {
                    criptomonedas.map( cripto => ( 
                        <Picker.Item key={ cripto.CoinInfo.id } label={ cripto.CoinInfo.FullName } value={ cripto.CoinInfo.Name }/>
                    ))
                }
            </Picker>

            <View style={ styles.botonCotizar }>
                <Button title='Cotizar' color='#5E49E2' onPress={cotizarMoneda}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 15,
        marginVertical: 5
    },
    botonCotizar: {
        marginVertical: 5,
    }
})
