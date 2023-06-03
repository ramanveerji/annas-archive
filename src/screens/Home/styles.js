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

export const recommendationStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    marginVertical: 5,
    backgroundColor: colors.container,
    padding: 6,
    borderRadius: 12
  },
  image: {
    height: 175,
    width: 99,
    margin: 8,
    borderRadius: 6
  },
  information: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: colors.title,
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 8
  },
  authors: {
    fontStyle: 'italic',
    fontSize: 16,
    fontWeight: 300,
    textAlign: 'center',
    color: colors.text
  }
})
