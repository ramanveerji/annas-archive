import { PureComponent } from 'react'
import { View, TextInput, Button, FlatList } from 'react-native'
import { API_URL } from '../../init'
import styles from './styles'
import axios from 'axios'
import Book from '../../components/Book'

class HomeScreen extends PureComponent {
  state = {
    loading: true,
    recommendations: [],
    error: null
  }

  componentDidMount () {
    axios.get(API_URL)
      .then((response) => this.setState({
        loading: false,
        recommendations: response.data
      }))
      .catch(() => this.setState({ error: 'Deu erro!' }))
  }

  render () {
    const renderItem = ({ item, index }) => <Book data={item} key={index} />
    return (
      <View style={styles.flex}>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="O que você deseja?" />
          <Button title="Procurar" />
        </View>
        <View style={styles.flex}>
          <FlatList
            data={this.state.recommendations}
            renderItem={renderItem}
          />
        </View>
      </View>
    )
  }
}

export default HomeScreen
