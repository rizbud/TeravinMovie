import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

// Styles
import styles from './Styles/ScoreStyle'
import { apply } from '../Themes/OsmiProvider'
import { scaleWidth } from 'osmicsx'

const Score = props => {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="star" size={scaleWidth(4.5)} color='gray' />
      <Text style={styles.score}>{props.score}</Text>
    </View>
  )
}

// Prop type warnings
Score.propTypes = {
  score: PropTypes.number.isRequired,
  style: PropTypes.object,
}

// Defaults for props
Score.defaultProps = {
  score: 0,
  style: {},
}

export default memo(Score)
