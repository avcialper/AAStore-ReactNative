import React from 'react'
import Lottie from 'lottie-react-native'

const Loading = () => {
    return (
        <Lottie source={require('../../assets/loading.json')} autoPlay style={{ backgroundColor: 'black' }} />
    )
}

export default Loading