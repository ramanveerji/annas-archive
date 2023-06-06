import { StyleSheet } from 'react-native'
import { colors } from '../../init'

export const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
})

export const searchStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
    margin: 6,
    justifyContent: 'center'
  },
  searchInput: {
    flex: 1,
    borderColor: colors.borders,
    borderWidth: 2,
    borderRadius: 3,
    marginRight: 5,
    padding: 4,
    color: colors.text
  }
})
