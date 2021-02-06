import React from 'react'
import { connect } from 'react-redux'
import { FlatList, Text } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

// Components
import ImageSlider from '../Components/ImageSlider'
import MovieCard from '../Components/MovieCard'

// Styles
import styles from './Styles/HomeScreenStyle'
import { apply } from '../Themes/OsmiProvider'

const HomeScreen = props => {
  const featured = [
    '/srYya1ZlI97Au4jUYAktDe3avyA.jpg',
    '/nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg',
    '/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg'
  ]

  const movie = [{
    title: 'Kabayan',
    release: '2020-10-09',
    image_url: '/8AQRfTuTHeFTddZN4IUAqprN8Od.jpg',
    rating: 9.3
  }, {
    title: 'Kabayan',
    release: '2020-10-09',
    image_url: '/8AQRfTuTHeFTddZN4IUAqprN8Od.jpg',
    rating: 9.3
  }, {
    title: 'Kabayan',
    release: '2020-10-09',
    image_url: '/8AQRfTuTHeFTddZN4IUAqprN8Od.jpg',
    rating: 9.3
  }]
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageSlider data={featured} style={styles.imageSlider} containerStyle={apply('full')} />
      <FlatList
        data={movie}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={apply('flex w/100 px-5')}
        ListHeaderComponent={<Text style={styles.title}>Top Popular Movies</Text>}
        renderItem={({ item }) => <MovieCard item={item} />}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
