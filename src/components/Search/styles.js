import { StyleSheet } from 'react-native'

import { colors } from '../../init'

export const basicStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'center',
    margin: 6,
    justifyContent: 'center'
  },
  searchInput: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 2,
    borderRadius: 3,
    marginRight: 5,
    padding: 4,
    color: colors.text
  }
})

export const advancedStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 6
  },
  filtersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  filter: {
    flex: 1,
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textCenter: {
    color: colors.text,
    textAlign: 'center'
  },
  picker: {
    flex: 1,
    color: colors.text
  },
  pickerItem: {
    color: colors.text,
    backgroundColor: colors.background
  }
})
