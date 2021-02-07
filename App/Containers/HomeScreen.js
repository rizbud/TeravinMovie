import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { FlatList, Text } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

// Components
import StatusBar from '../Components/StatusBar'
import ImageSlider from '../Components/ImageSlider'
import MovieCard from '../Components/MovieCard'

// Styles
import styles from './Styles/HomeScreenStyle'
import { apply } from '../Themes/OsmiProvider'
import { ScrollView } from 'react-native-gesture-handler'

const HomeScreen = props => {
  const { navigation } = props

  const featured = [
    '/srYya1ZlI97Au4jUYAktDe3avyA.jpg',
    '/nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg',
    '/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg'
  ]

  const movie = [{
    title: 'Wonder Woman 1984',
    release: '2020-12-16',
    image_url: '/8AQRfTuTHeFTddZN4IUAqprN8Od.jpg',
    backdrop: '/srYya1ZlI97Au4jUYAktDe3avyA.jpg',
    rating: 7
  }, {
    title: 'Skylines',
    release: '2020-10-25',
    image_url: '/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg',
    backdrop: '/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg',
    rating: 5.8
  }, {
    title: 'Godzilla: King of the Monsters',
    release: '2019-05-29',
    image_url: '/mzOHg7Q5q9yUmY0b9Esu8Qe6Nnm.jpg',
    backdrop: '/jb6Ju38HmKX0bYHCmAxs8HyNeJ2.jpg',
    rating: 6.6
  }, {
    title: 'Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil, Mutant, Hellbound, Flesh-Eating Subhumanoid Zombified Living Dead, Part 3',
    release: '2019-05-29',
    image_url: '/mzOHg7Q5q9yUmY0b9Esu8Qe6Nnm.jpg',
    backdrop: '/jb6Ju38HmKX0bYHCmAxs8HyNeJ2.jpg',
    rating: 6.6
  }]

  const onMovieClick = useCallback((item) => {
    navigation.push('DetailScreen', { item })
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageSlider data={featured} style={styles.imageSlider} containerStyle={apply('full')} />
        <FlatList
          data={movie}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={apply('flex w/100 px-5')}
          ListHeaderComponent={<Text style={styles.title}>Top Popular Movies</Text>}
          renderItem={({ item }) => <MovieCard item={item} onPress={() => onMovieClick(item)} />}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
