import React from 'react'
import { View, TextInput } from 'react-native'
import styles from './SearchBar.styles'

const SearchBar = ({ findProduct }) => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={findProduct}
                placeholder='Search'
            />
        </View>
    )
}

export default SearchBar