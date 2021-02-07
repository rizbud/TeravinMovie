import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import Shimmer from 'react-native-shimmer'
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
  const { item, loading } = props

  return (
    <TouchableOpacity disabled={loading} activeOpacity={0.9} style={styles.container} {...props}>
      {loading ? (
        <Shimmer animating style={styles.image} />
      ) : (
        <FastImage
          style={styles.image}
          source={{ uri: `${Images.prefix}${item?.poster_path}` }}
          resizeMode='stretch'
        />
      )}
      <View style={styles.detail}>
        {loading ? (
          <>
            <Shimmer animating style={apply('bg-gray-400 w/50 h/3.5')} />
            <Shimmer animating style={apply('bg-gray-400 w/30 h/2.5 my-0.7')} />
            <Shimmer animating style={apply('bg-gray-400 w/10 h/2.5')} />
          </>
        ) : (
          <>
            <Text numberOfLines={2} style={styles.title}>{item?.original_title}</Text>
            <Text style={styles.date}>{dayjs(item?.release_date).locale('id').format('D MMMM YYYY')}</Text>
            <Score score={item?.vote_average} />
          </>
        )}
      </View>
    </TouchableOpacity>
  )
}

// Prop type warnings
MovieCard.propTypes = {
  item: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  onPress: PropTypes.func,
}

// Defaults for props
MovieCard.defaultProps = {
  item: {},
  loading: true,
  onPress: () => {},
}

export default memo(MovieCard)
