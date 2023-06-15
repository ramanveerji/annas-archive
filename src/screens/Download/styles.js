import { StyleSheet } from 'react-native'
import { colors } from '../../init'

const styles = StyleSheet.create({
  contentContainer: {
    padding: 6
  },
  thumbnailContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16
  },
  thumbnail: {
    backgroundColor: colors.thumbnail,
    borderRadius: 12,
    width: 200,
    height: 354
  },
  title: {
    textAlign: 'center',
    marginBottom: 4,
    fontSize: 24,
    color: colors.title
  },
  authors: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 13,
    fontStyle: 'italic',
    color: colors.text
  },
  description: {
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 15,
    color: colors.text
  },
  downloads: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10
  },
  linkContainer: {
    flex: 1,
    backgroundColor: colors.button,
    borderRadius: 6,
    padding: 10,
    margin: 3,
    minWidth: 90,
    minHeight: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  linkTitle: {
    color: colors.buttonText,
    fontSize: 14
  }
})

export default styles
