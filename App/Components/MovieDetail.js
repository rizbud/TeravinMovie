import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

// Component
import Score from '../Components/Score'

import Images from '../Images'

// Styles
import styles from './Styles/MovieDetailStyle'
import { apply } from '../Themes/OsmiProvider'

const MovieDetail = props => {
  const { data, style } = props

  return (
    <View style={styles.container}>
      <FastImage source={{ uri: `${Images.prefix}${data?.image_url}` }} style={styles.image} resizeMode='stretch' />
      <View style={apply('flex')}>
        <Text style={styles.title}>{data?.title}</Text>
        <Text style={styles.tagline}>Lorem ipsum dolor sit amet constectuar.</Text>
        <Text style={styles.genres}>Action, Adventure, RPG</Text>
        <View style={styles.bottom}>
          <Text style={styles.releaseDate}>{dayjs(data?.release).locale('id').format('D MMMM YYYY')}</Text>
          <Score score={data?.rating} />
        </View>
      </View>
    </View>
  )
}

// Prop type warnings
MovieDetail.propTypes = {
  data: PropTypes.object.isRequired,
}

// Defaults for props
MovieDetail.defaultProps = {
  data: {},
}

export default memo(MovieDetail)
