import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        height: 180,
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#18171c',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 165,
        width: 120,
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: 3,
        resizeMode: 'contain',
    },
    body: {
        flex: 1,
        padding: 3,
    },
    upperBody: {
        flex: 1
    },
    category: {
        textAlign: 'right',
        fontStyle: 'italic',
        color: '#caaf4e'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    lowerBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rating: {
        fontSize: 15,
        fontStyle: 'italic',
        color: '#ffc000'
    },
    price: {
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 7,
        color: '#058930'
    }
})