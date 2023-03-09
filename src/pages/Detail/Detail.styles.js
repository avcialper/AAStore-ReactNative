import { StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    image: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('screen').width,
        resizeMode: 'center',
        backgroundColor: 'white'
    },
    upperBody: {
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 10
    },
    category: {
        fontSize: 15,
        fontStyle: 'italic',
        color: '#caaf4e'
    },
    rating: {
        fontSize: 15,
        fontStyle: 'italic',
        color: '#ffc000'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 10
    },
    description: {
        fontSize: 20,
        margin: 10
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#058930',
        margin: 20
    }
})