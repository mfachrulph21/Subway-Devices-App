import { StyleSheet, Text, View } from "react-native"

export default function CartScreen({navigation}) {
    return (
        <>
        <View style={style.containter}>
            <Text >Cart Screen</Text>
        </View>
        </>
    )
}

const style = StyleSheet.create({
    containter: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
})