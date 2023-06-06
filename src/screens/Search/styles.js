import { StyleSheet } from 'react-native'
import { colors } from '../../init'

export const searchStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 6
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center'
  },
  searchInput: {
    flex: 1,
    borderColor: colors.borders,
    color: colors.text,
    borderWidth: 2,
    borderRadius: 4,
    marginRight: 5,
    padding: 4
  },
  filtersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  filter: {
    flex: 1,
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textCenter: {
    color: colors.text,
    textAlign: 'center'
  }
})
