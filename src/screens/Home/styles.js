import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
})

export const searchStyle = StyleSheet.create({
  container: {
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
    flexDirection: 'row',
    marginHorizontal: 5,
    alignItems: 'center'
  },
  filter: {
    flex: 1,
    margin: 3,
    padding: 6,
    borderRadius: 4,
    backgroundColor: '#E0E0E0'
  },
  textCenter: {
    textAlign: 'center'
  }
})
