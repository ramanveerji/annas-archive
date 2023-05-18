import { memo, useRef } from 'react'
import { Button, TextInput, View } from 'react-native'
import { searchStyle } from './styles'

const BasicSearch = ({ navigation }) => {
  const input = useRef()
  const search = () => navigation.navigate('Search', { params: { query: input.current.value } })
  return (
    <View style={searchStyle.container}>
      <TextInput
        ref={input}
        style={searchStyle.searchInput}
        placeholder="O que você deseja?"
      />
      <Button title="Procurar" onPress={search} />
    </View>
  )
}

export default memo(BasicSearch)
