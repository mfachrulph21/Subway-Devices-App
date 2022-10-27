import { Text, View, StyleSheet } from "react-native"

export default function FavoriteScreen() {
    return (
        <View style={style.containter}>
        <Text >Favorite Screen</Text>
    </View>
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