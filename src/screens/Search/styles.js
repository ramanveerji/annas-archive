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
