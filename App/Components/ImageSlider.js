import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'
import Swiper from 'react-native-swiper'

import Images from '../Images'

// Styles
import styles from './Styles/ImageSliderStyle'
import { apply } from '../Themes/OsmiProvider'

const ImageSlider = props => {
  const { data, style, containerStyle } = props

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
        {data.map((item, index) => (
          <FastImage source={{ uri: `${Images.prefix}${item}` }} key={index} style={styles.image} />
        ))}
      </Swiper>
    </View>
  )
}

// Prop type warnings
ImageSlider.propTypes = {
  data: PropTypes.array.isRequired,
}

// Defaults for props
ImageSlider.defaultProps = {
  data: []
}

export default memo(ImageSlider)
