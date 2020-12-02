import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import { Cotizacion } from './components/Cotizacion';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header'

const App = () => {

    const [moneda, setMoneda] = useState('')
    const [criptomoneda, setCriptomoneda] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [response, setResponse] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const cotizarCriptomoneda = async (moneda, criptomoneda) => {
            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
            try {
                if(loaded){
                    let response = await fetch(url);
                    let response_json = await response.json();
                    setLoading(true)
                    setTimeout(() => {
                        setResponse(response_json.DISPLAY[criptomoneda][moneda])
                        setLoading(false)
                        setLoaded(false)
                    }, 3000);
                }
            } catch (error) {
                console.error(error);
            }
        };
        cotizarCriptomoneda(moneda, criptomoneda)
    }, [loaded])

    return (
        <View>
            <Header />
            <Image
                style={styles.image}
                source={require('./assets/img/cryptomonedas.png')}
            />
            <View style={styles.form}>
                <Formulario
                    moneda={moneda}
                    criptomoneda={criptomoneda}
                    setMoneda={setMoneda}
                    setCriptomoneda={setCriptomoneda}
                    setLoaded={setLoaded}
                />
            </View>
            {
                loading 
                ? <ActivityIndicator size='large' color='#5E49E2' style={{ marginTop: 65 }}/>
                : <Cotizacion response={response}/> 

            }
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 150,
        marginHorizontal: '2.5%'
    },
    form: {
        marginHorizontal: '2.5%'
    }
});

export default App;
