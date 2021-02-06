import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/Ionicons'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

import Images from '../Images'

// Styles
import styles from './Styles/MovieCardStyle'
import { apply } from '../Themes/OsmiProvider'
import { scaleWidth } from 'osmicsx'

const MovieCard = props => {
  const { item } = props

  return (
    <View style={styles.container}>
      <FastImage style={styles.image} source={{ uri: `${Images.prefix}${item?.image_url}` }} />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.date}>{dayjs(item?.release).locale('id').format('D MMMM YYYY')}</Text>
        <View style={styles.wrapRating}>
          <Icon name="star" size={scaleWidth(4.5)} color='gray' />
          <Text style={styles.rating}>{item?.rating}</Text>
        </View>
      </View>
    </View>
  )
}

// Prop type warnings
MovieCard.propTypes = {
  item: PropTypes.object.isRequired,
}

// Defaults for props
MovieCard.defaultProps = {
  item: {},
}

export default memo(MovieCard)
