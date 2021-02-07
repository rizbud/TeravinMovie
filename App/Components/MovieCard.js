import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/Ionicons'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

// Components
import Score from './Score'

import Images from '../Images'

// Styles
import styles from './Styles/MovieCardStyle'
import { apply } from '../Themes/OsmiProvider'
import { scaleWidth } from 'osmicsx'

const MovieCard = props => {
  const { item } = props

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container} {...props}>
      <FastImage
        style={styles.image}
        source={{ uri: `${Images.prefix}${item?.poster_path}` }}
        resizeMode='stretch'
      />
      <View style={styles.detail}>
        <Text numberOfLines={2} style={styles.title}>{item?.title}</Text>
        <Text style={styles.date}>{dayjs(item?.release_date).locale('id').format('D MMMM YYYY')}</Text>
        <Score score={item?.vote_average} />
      </View>
    </TouchableOpacity>
  )
}

// Prop type warnings
MovieCard.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
}

// Defaults for props
MovieCard.defaultProps = {
  item: {},
  onPress: () => {},
}

export default memo(MovieCard)
