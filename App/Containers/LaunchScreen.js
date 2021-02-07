import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BackHandler, Alert } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import FastImage from 'react-native-fast-image'
import NetInfo from '@react-native-community/netinfo'

// Components
import StatusBar from '../Components/StatusBar'

import Images from '../Images'
import MovieActions from '../Redux/MovieRedux'

// Styles
import styles from './Styles/LaunchScreenStyle'
import { apply } from '../Themes/OsmiProvider'

const LaunchScreen = props => {
  const { navigation } = props

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(info => {
      if (info?.isConnected) {
        props.getTrending()
        props.getList()
        setTimeout(() => navigation.replace('HomeScreen'), 3000)
      } else {
        Alert.alert('Oopss...', 'Kamu tidak terhubung ke internet', [{
          text: 'OK',
          onPress: () => BackHandler.exitApp()
        }])
      }
    })

    unsubscribe()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent barStyle='dark-content' backgroundColor='white' />

      <FastImage source={Images.splash} style={styles.image} />
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const bindActions = dispatch => ({
  getTrending: () => dispatch(MovieActions.getTrendingRequest()),
  getList: () => dispatch(MovieActions.getListRequest())
})

export default connect(mapStateToProps, bindActions)(LaunchScreen)
