import { StyleSheet } from 'react-native'

import { colors } from '../../init'

export const basicStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 6,
    marginBottom: 6
  },
  searchInput: {
    borderColor: colors.border,
    borderRadius: 3,
    borderWidth: 2,
    color: colors.text,
    flex: 1,
    marginRight: 5,
    padding: 4
  }
})

export const advancedStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 6
  },
  filtersContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  filter: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 6
  },
  textCenter: {
    color: colors.text,
    textAlign: 'center'
  },
  picker: {
    color: colors.text,
    flex: 1
  },
  pickerItem: {
    backgroundColor: colors.background,
    color: colors.text
  }
})
