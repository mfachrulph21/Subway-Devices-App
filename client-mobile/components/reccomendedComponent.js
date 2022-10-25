import { useEffect, useState } from "react"
import { Text } from "react-native"

export default function ReccomendedComponent() {

    let [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://subwhy-server.herokuapp.com/pub/items', {
            method: 'GET'
        })
        .then((data) => {
            const items = data.json()
            setItems(items)
        })
    }, [])
    console.log(items)
    return (
        <>
        <Text>HALLO INI RECCOMENDED components</Text>
        </>
    )

}