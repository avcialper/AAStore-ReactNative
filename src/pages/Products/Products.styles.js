import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingHorizontal: 5,
        marginBottom: 3
    },
    title: {
        textAlign: 'right',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#febf5e'
    }
})