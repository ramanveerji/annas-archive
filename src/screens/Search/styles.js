import { StyleSheet } from 'react-native'

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
    borderColor: '#332244',
    borderWidth: 1,
    borderRadius: 3,
    marginRight: 5,
    padding: 4
  },
  filtersContainer: {
    flexDirection: 'row'
  },
  filter: {
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center'
  },
  textCenter: {
    textAlign: 'center'
  }
})

export const resultStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
    padding: 12,
    backgroundColor: '#ddd',
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
    fontSize: 18,
    textAlign: 'center'
  },
  authors: {
    marginVertical: 5,
    textAlign: 'center'
  },
  fileInfo: {
    color: '#636'
  }
})
