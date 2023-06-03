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

export const resultStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
    padding: 12,
    backgroundColor: colors.container,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  thumbnail: {
    height: 175,
    width: 99,
    backgroundColor: '#dfd',
    borderRadius: 6,
    marginRight: 12
  },
  informationArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: colors.title,
    fontSize: 18,
    textAlign: 'center'
  },
  authors: {
    marginVertical: 5,
    textAlign: 'center',
    color: colors.text,
    fontStyle: 'italic'
  },
  fileInfo: {
    color: colors.placeholder
  }
})
