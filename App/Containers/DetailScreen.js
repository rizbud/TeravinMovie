import React, { useEffect, useCallback, useState } from 'react'
import { connect } from 'react-redux'
import MovieActions from '../Redux/MovieRedux'
import {
  TouchableOpacity,
  RefreshControl,
  Platform,
  Alert,
  View,
  Text
} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/Ionicons'
// import { TouchableOpacity } from 'react-native-gesture-handler'
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
  const [stickyHeight, setStickyHeight] = useState(scaleHeight(5))

  useEffect(() => {
    if (!fetching && error) {
      Alert.alert('Oopss..', 'Terjadi kesalahan', [{
        text: 'Kembali',
        onPress: () => navigation.goBack()
      }])
    }
  }, [detail])

  handleScroll = (e) => {
    if(e.nativeEvent.contentOffset.y <= 20) {
      setStickyHeight(0)
    } else {
      setStickyHeight(scaleHeight(5))
    }
  }

  const handleBack = useCallback(() => navigation.goBack(), [])

  const onRefresh = useCallback(() => {
    props.getDetail(data?.id)
  }, [detail])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        animated
        backgroundColor='white'
        barStyle='dark-content'
      />
      <ParallaxScrollView
      showsVerticalScrollIndicator={false}
      scrollEvent={handleScroll}
      backgroundColor='white'
      refreshControl={<RefreshControl refreshing={fetching} onRefresh={onRefresh} />}
      renderForeground={() => fetching ? (
        <>
          <Shimmer animating style={styles.backdrop} />
          <TouchableOpacity activeOpacity={0.9} onPress={handleBack} style={styles.back}>
            <Icon name="arrow-back" color='#fff' size={scaleWidth(8)} />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <FastImage
            source={{ uri: `${Images.prefix}${data?.backdrop_path}` }}
            style={styles.backdrop}
          />
          <TouchableOpacity  activeOpacity={0.9} onPress={handleBack} style={styles.back}>
            <Icon name="arrow-back" color='#fff' size={scaleWidth(8)} />
          </TouchableOpacity>
        </>
      )}
      stickyHeaderHeight={stickyHeight}
      renderStickyHeader={() => (
        <View style={[styles.stickyHeader, Platform.OS === 'android' && apply('pt-1')]}>
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
