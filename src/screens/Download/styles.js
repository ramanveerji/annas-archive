import { StyleSheet } from 'react-native'

import { colors } from '../../init'

const styles = StyleSheet.create({
  contentContainer: {
    padding: 6
  },
  thumbnailContainer: {
    alignItems: 'center',
    flex: 1,
    padding: 16
  },
  thumbnail: {
    backgroundColor: colors.thumbnail,
    borderRadius: 12,
    height: 354,
    width: 200
  },
  shadow: {
    borderRadius: 8,
    elevation: 20,
    shadowColor: colors.shadow
  },
  title: {
    color: colors.title,
    fontSize: 24,
    marginBottom: 4,
    marginHorizontal: 8,
    textAlign: 'center'
  },
  authors: {
    color: colors.text,
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: 'center'
  },
  description: {
    color: colors.text,
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'left'
  },
  downloads: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10
  },
  linkContainer: {
    alignItems: 'center',
    backgroundColor: colors.button,
    borderRadius: 6,
    flex: 1,
    justifyContent: 'center',
    margin: 3,
    minHeight: 90,
    minWidth: 90,
    padding: 10
  },
  linkTitle: {
    color: colors.buttonText,
    fontSize: 14
  }
})

export default styles
