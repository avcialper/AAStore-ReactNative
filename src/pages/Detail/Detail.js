import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { API_URL } from '@env'
import useFetch from '../../hooks/useFetch'
import styles from './Detail.styles'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Detail = ({ route }) => {

    // Takes id
    const { id } = route.params
    // To get unique product
    const { error, loading, data } = useFetch(`${API_URL}/${id}`)
    // To shred at rating
    const shredRating = data.rating

    // Loading animation
    if (loading) return <Loading />
    // Error animation
    if (error) return <Error />

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <View style={styles.upperBody}>
                <Text style={styles.category}>{data.category}</Text>
                <Text style={styles.rating}>{shredRating.rate}/5 ({shredRating.count})</Text>
            </View>
            <ScrollView>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
            </ScrollView>
            <Text style={styles.price}>{data.price} $</Text>
        </View>
    )
}

export default Detail