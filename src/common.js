import { Alert, Platform } from 'react-native'
//alterana indereço conforme OS
//altere para seu ip local 
const server = Platform.OS === 'ios' ?
    'http://localhost:3010' : 'http://192.168.2.25:3010'

function showError(err) {
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

export { server, showError }
