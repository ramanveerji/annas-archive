import PropTypes from 'prop-types'
import { memo } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

import { colors } from '../init'

const Loading = ({ message }) => (
  <View style={style.root}>
    <ActivityIndicator size={64} color={colors.loadingAnimation} />
    <Text style={style.text}>{message}</Text>
  </View>
)
Loading.propTypes = { message: PropTypes.string.isRequired }

const style = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: colors.text,
    fontSize: 16,
    marginTop: 15,
    textAlign: 'center'
  }
})

export default memo(Loading)
