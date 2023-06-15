import { memo } from 'react'
import { colors } from '../init'
import { ActivityIndicator, Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

const Loading = ({ message }) => (
  <View style={style.root}>
    <ActivityIndicator size={64} color={colors.loadingAnimation} />
    <Text style={style.text}>{message}</Text>
  </View>
)
Loading.propTypes = { message: PropTypes.string.isRequired }

const style = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: colors.text,
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center'
  }
})

export default memo(Loading)
