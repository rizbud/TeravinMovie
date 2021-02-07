import React, { useEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import MovieActions from '../Redux/MovieRedux'
import { RefreshControl, Alert, View, Text } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Shimmer from 'react-native-shimmer'

// Components
import StatusBar from '../Components/StatusBar'
import MovieDetail from '../Components/MovieDetail'

import Images from '../Images'

// Styles
import styles from './Styles/DetailScreenStyle'
import { apply } from '../Themes/OsmiProvider'
import { scaleWidth, scaleHeight } from 'osmicsx'

const DetailScreen = props => {
  const { navigation, detail } = props
  const { fetching, data, error } = detail

  useEffect(() => {
    if (!data) {
      Alert.alert('Oopss..', 'Data tidak ditemukan', [{
        text: 'OK',
        onPress: () => navigation.goBack()
      }])
    }
    if (error) {
      Alert.alert('Oopss..', 'Terjadi kesalahan', [{
        text: 'Kembali',
        onPress: () => navigation.goBack()
      }])
    }
  }, [detail])

  const handleBack = useCallback(() => navigation.goBack(), [])

  const onRefresh = useCallback(() => {
    props.getDetail(data?.id)
  }, [detail])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent animated backgroundColor='transparent' barStyle='dark-content' />
      <ParallaxScrollView
      showsVerticalScrollIndicator={false}
      backgroundColor='white'
      refreshControl={<RefreshControl refreshing={fetching} onRefresh={onRefresh} />}
      renderBackground={() => fetching ? (
        <Shimmer animating style={styles.backdrop} />
      ) : (
        <FastImage
          source={{ uri: `${Images.prefix}${data?.backdrop_path}` }}
          style={styles.backdrop}
        />
      )}
      renderForeground={() => (
        <TouchableOpacity activeOpacity={0.9} onPress={handleBack} style={styles.back}>
          <Icon name="arrow-back" color='#fff' size={scaleWidth(8)} />
        </TouchableOpacity>
      )}
      stickyHeaderHeight={scaleHeight(11)}
      renderStickyHeader={() => (
        <View style={styles.stickyHeader}>
          <TouchableOpacity activeOpacity={0.9} onPress={handleBack}>
            <Icon name='arrow-back-outline' color='#000' size={scaleWidth(7)} />
          </TouchableOpacity>
          <Text style={styles.subtitle}>{data?.title.substr(0, 25)}{data?.title.length > 25 && '...'}</Text>
        </View>
      )}
      parallaxHeaderHeight={scaleWidth(56)}>
        <View style={styles.content}>
          <MovieDetail loading={fetching} data={data} />
          {fetching ? (
            <>
              <Shimmer animating style={[styles.shimmer, apply('w/87')]} />
              <Shimmer animating style={[styles.shimmer, apply('w/74')]} />
              <Shimmer animating style={[styles.shimmer, apply('w/80')]} />
              <Shimmer animating style={[styles.shimmer, apply('w/47')]} />
            </>
          ) : (
            <>
              <Text style={styles.label}>Overview:</Text>
              <Text style={styles.overview}>
                {data?.overview}
              </Text>
            </>
          )}
        </View>
      </ParallaxScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  detail: state.movie.detail
})

const mapDispatchToProps = dispatch => ({
  getDetail: (id) => dispatch(MovieActions.getDetailRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
