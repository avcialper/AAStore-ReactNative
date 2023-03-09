import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import styles from './ProductCard.styles'

const ProductCard = ({ product, onSelect }) => {

    // To shred at rating
    const shredRating = product.rating

    return (
        <Pressable style={styles.container} onPress={onSelect} >
            <Image
                style={styles.image}
                source={{ uri: product.image }}
            />
            <View style={styles.body}>
                <View style={styles.upperBody}>
                    <Text style={styles.category}>{product.category}</Text>
                    <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
                    <Text numberOfLines={5}>{product.description}</Text>
                </View>
                <View style={styles.lowerBody}>
                    <Text style={styles.rating}>{shredRating.rate}/5 ({shredRating.count})</Text>
                    <Text style={styles.price}>{product.price} $</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ProductCard