import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { StatusBar } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import FastImage from 'react-native-fast-image'
import NetInfo from '@react-native-community/netinfo'

import Images from '../Images'

// Styles
import styles from './Styles/LaunchScreenStyle'
import { apply } from '../Themes/OsmiProvider'

const LaunchScreen = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(info => {
      if (info?.isConnected) {
        setTimeout(() => navigation.replace('HomeScreen'), 3000)
      } else {
        alert('Your Device Not Connected to Internet')
      }
    })

    unsubscribe()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='white' />

      <FastImage source={Images.splash} style={styles.image} />
    </SafeAreaView>
  )
}

const bindActions = dispatch => ({

})

export default connect(bindActions)(LaunchScreen)
