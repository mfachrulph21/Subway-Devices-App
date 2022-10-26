import { Text, View, StyleSheet} from "react-native";

export default function SearchScreen() {
    return (
        <>
        <View style={style.containter}>
            <Text >Search Screen</Text>
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