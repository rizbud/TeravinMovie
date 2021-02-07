import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import Shimmer from 'react-native-shimmer'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

// Component
import Score from '../Components/Score'

import Images from '../Images'

// Styles
import styles from './Styles/MovieDetailStyle'
import { apply } from '../Themes/OsmiProvider'

const MovieDetail = props => {
  const { data, loading } = props

  return (
    <View style={styles.container}>
      {loading ? (
        <Shimmer animating style={styles.image} />
      ) : (
        <FastImage source={{ uri: `${Images.prefix}${data?.poster_path}` }} style={styles.image} resizeMode='stretch' />
      )}
      <View style={apply('flex')}>
        {loading ? (
          <>
            <Shimmer animating style={styles.shimmerTitle} />
            <Shimmer animating style={[styles.shimmer, apply('w/40')]} />
            <Shimmer animating style={[styles.shimmer, apply('w/35')]} />
            <Shimmer animating style={[styles.shimmer, apply('w/25')]} />
          </>
        ) : (
          <>
            <Text style={styles.title}>{data?.original_title}</Text>
            <Text style={styles.tagline}>{data?.tagline}</Text>
            <Text style={styles.genres}>
              {data?.genres.map((item, index) => `${item?.name}${index !== data?.genres.length-1 ? ', ' : ''}`)}
            </Text>
            <View style={styles.bottom}>
              <Text style={styles.releaseDate}>{dayjs(data?.release_date).locale('id').format('D MMMM YYYY')}</Text>
              <Score score={data?.vote_average} />
            </View>
          </>
        )}
      </View>
    </View>
  )
}

// Prop type warnings
MovieDetail.propTypes = {
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool,
}

// Defaults for props
MovieDetail.defaultProps = {
  data: {},
  loading: true
}

export default memo(MovieDetail)
