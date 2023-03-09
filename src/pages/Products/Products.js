import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { API_URL, API_CATEGORY_URL } from '@env'
import ProductDard from "../../components/ProductCard"
import styles from './Products.styles'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import SearchBar from '../../components/SeacrhBar'
import CategoryArea from '../../components/CategoryArea'

const Products = ({ navigation }) => {

    // States
    const [url, setUrl] = useState(API_URL)
    const { error, loading, data } = useFetch(url)
    const [dataList, setDataList] = useState(data)

    // To update the datalist when data changes
    useEffect(() => {
        setDataList(data)
    }, [data])

    // To go to detail page
    const handleProductSelect = (id) => navigation.navigate('DetailPage', { id })

    // To update dataList when search
    const findProduct = (text) => {
        const filteredData = data.filter(item => item.title.toLowerCase().indexOf(text.toLowerCase()) > -1)
        setDataList(filteredData)
    }

    // To filter data according to category
    const setSelected = (selected) => {
        if (selected == 'all')
            setUrl(API_URL)
        else
            setUrl(`${API_CATEGORY_URL}${selected}`)
    }

    // To render product cards
    const renderProduct = ({ item }) => <ProductDard product={item} onSelect={() => handleProductSelect(item.id)} />

    // Loading animation
    if (loading) return <Loading />
    // Error animation
    if (error) return <Error />

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchBar findProduct={findProduct} />
                <Text style={styles.title}>AA STORE</Text>
            </View>
            <CategoryArea setSelected={setSelected} />
            <FlatList data={dataList} renderItem={renderProduct} />
        </View>
    )
}

export default Products