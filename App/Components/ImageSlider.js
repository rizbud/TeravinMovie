import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import Swiper from 'react-native-swiper'
import Shimmer from 'react-native-shimmer'

import Images from '../Images'

// Styles
import styles from './Styles/ImageSliderStyle'
import { apply } from '../Themes/OsmiProvider'

const ImageSlider = props => {
  const { data, style, loading, containerStyle, onPress } = props

  return (
    <View style={style}>
      <Swiper
      autoplay
      autoplayTimeout={3}
      loop
      index={0}
      transitionStyle='scroll'
      dotColor={apply('white-semi')}
      contentContainerStyle={containerStyle}
      removeClippedSubviews={false}
      paginationStyle={apply('bottom-w-7')}>
        {data.map((item, index) => loading ? (
          <Shimmer animating style={styles.image} key={index} />
        ) : (
          <TouchableOpacity activeOpacity={0.9} onPress={() => onPress(item)}>
            <FastImage source={{ uri: `${Images.prefix}${item?.backdrop_path}` }} key={index} style={styles.image} />
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  )
}

// Prop type warnings
ImageSlider.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool
}

// Defaults for props
ImageSlider.defaultProps = {
  data: [],
  loading: true,
}

export default memo(ImageSlider)
