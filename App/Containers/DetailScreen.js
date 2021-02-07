import React from 'react'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { View, Text } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

// Components
import StatusBar from '../Components/StatusBar'
import MovieDetail from '../Components/MovieDetail'

import Images from '../Images'

// Styles
import styles from './Styles/DetailScreenStyle'
import { apply } from '../Themes/OsmiProvider'
import { scaleWidth, scaleHeight } from 'osmicsx'

const DetailScreen = props => {
  const { navigation, route, detail } = props
  const { fetching, data } = detail

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent animated backgroundColor='transparent' barStyle='dark-content' />
      <ParallaxScrollView
      showsVerticalScrollIndicator={false}
      backgroundColor='white'
      contentContainerStyle={apply('bg-white w/100')}
      renderBackground={() => (
        <FastImage
          source={{ uri: `${Images.prefix}${data?.backdrop_path}` }}
          style={styles.backdrop}
        />
      )}
      renderForeground={() => (
        <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()} style={styles.back}>
          <Icon name="arrow-back" color='#fff' size={scaleWidth(8)} />
        </TouchableOpacity>
      )}
      stickyHeaderHeight={scaleHeight(11)}
      renderStickyHeader={() => (
        <View style={styles.stickyHeader}>
          <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.goBack()}>
            <Icon name='arrow-back-outline' color='#000' size={scaleWidth(7)} />
          </TouchableOpacity>
          <Text style={styles.subtitle}>{data?.title.substr(0, 25)}{data?.title.length > 25 && '...'}</Text>
        </View>
      )}
      parallaxHeaderHeight={scaleWidth(56)}>
        <View style={apply('flex px-5 min-h-93')}>
          <MovieDetail data={data} />
          <Text style={styles.label}>Overview:</Text>
          <Text style={styles.overview}>
            {data?.overview}
          </Text>
        </View>
      </ParallaxScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  detail: state.movie.detail
})

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(MovieActions.getListRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
