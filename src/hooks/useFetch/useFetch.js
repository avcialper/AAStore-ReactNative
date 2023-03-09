import axios from 'axios'
import { useState, useEffect } from 'react'
const useFetch = (url) => {

    // State
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // To fetch data
    const fetchData = async () => {
        try {
            const { data: ProductsList } = await axios.get(url)
            setData(ProductsList)
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    // Run fetch function
    useEffect(() => {
        fetchData()
    }, [url])

    return { error, loading, data }
}

export default useFetch