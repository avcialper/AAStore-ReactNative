import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 5,
        alignItems: 'center'
    },
    title: {
        flex: 1,
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 9,
        fontWeight: 'bold',
    },
    selectedTitle: {
        color: '#febf5e'
    }
})