import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { RefreshControl, ScrollView, FlatList, Text } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

// Components
import StatusBar from '../Components/StatusBar'
import ImageSlider from '../Components/ImageSlider'
import MovieCard from '../Components/MovieCard'

import MovieActions from '../Redux/MovieRedux'

// Styles
import styles from './Styles/HomeScreenStyle'
import { apply } from '../Themes/OsmiProvider'

const HomeScreen = props => {
  const { navigation, trending, list } = props

  useEffect(() => {
    const interval = setInterval(() => {
      props.getTrending()
      props.getList()
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  const getData = useCallback(() => {
    props.getTrending()
    props.getList()
  }, [])

  const onMovieClick = useCallback((item) => {
    props.resetDetail()
    setTimeout(() => props.getDetail(item?.id), 100)
    navigation.navigate('DetailScreen')
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent animated barStyle='dark-content' backgroundColor={apply('gray-100')} />
      <ScrollView
      refreshControl={<RefreshControl refreshing={trending?.fetching || list?.fetching} onRefresh={getData} />}
      showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, apply('mx-4 pt-6')]}>Lagi Ngetren</Text>
        <ImageSlider
          data={(trending?.fetching || !trending?.data) ? [1, 2, 3] : trending?.data.slice(0, 5)}
          style={styles.imageSlider}
          containerStyle={apply('full')}
          loading={trending?.fetching}
          onPress={(item) => onMovieClick(item)}
        />
        <FlatList
          data={list?.fetching ? [1, 2, 3] : list?.data.slice(0, 10)}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={apply('flex w/100 px-5')}
          ListHeaderComponent={<Text style={styles.title}>Populer</Text>}
          renderItem={({ item }) => (
            <MovieCard item={item} loading={list?.fetching} onPress={() => onMovieClick(item)} />
          )}
          ListEmptyComponent={<Text style={styles.empty}>Tidak ada film populer.</Text>}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
  trending: state.movie.trending,
  list: state.movie.list,
})

const mapDispatchToProps = dispatch => ({
  getTrending: () => dispatch(MovieActions.getTrendingRequest()),
  getList: () => dispatch(MovieActions.getListRequest()),
  resetDetail: () => dispatch(MovieActions.resetDetail()),
  getDetail: (id) => dispatch(MovieActions.getDetailRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
