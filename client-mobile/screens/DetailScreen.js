import { useQuery } from "@apollo/client"
import { StyleSheet, Text, View } from "react-native"
import { GET_ITEM_DETAIL } from "../config/queries"

export default function DetailScreen({route}) {

    const {id} = route.params
    console.log({id});
    const {loading, error, data} = useQuery(GET_ITEM_DETAIL, {
        variables: {getItemId : id}
    })

    console.log(data, '<<<<<<<<< ini data detail item')
    return (
    
        <View style={style.containter}>
            <Text >Detail Screen</Text>
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