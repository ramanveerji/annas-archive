import { PureComponent } from 'react'
import { View, FlatList } from 'react-native'
import { API_URL } from '../../init'
import { styles } from './styles'
import axios from 'axios'
import Book from './Book'
import Search from './SearchComponent'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

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
      .catch(() => this.setState({ loading: false, error: 'Deu erro!' }))
  }

  search (query, orderBy, extension) {
    this.setState({ loading: true })
    axios.get(`${API_URL}/search`, { params: { q: query, sort: orderBy, ext: extension } })
      .then((response) => this.setState({
        loading: false,
        recommendations: response.data
      }))
      .catch(() => this.setState({ loading: false, error: 'Deu erro!' }))
  }

  render () {
    const renderItem = ({ item, index }) => <Book data={item} key={index} />
    return (
      <View style={styles.flex}>
        <Search onSearchPress={(...args) => this.search(...args)} />
        <View style={styles.flex}>
          {this.state.loading
            ? <Loading message="Carregando conteúdos..." />
            : (this.state.error
                ? <Error message="Falha ao carregar resultados da pesquisa!" />
                : <FlatList
                data={this.state.recommendations}
                renderItem={renderItem}
              />)}
        </View>
      </View>
    )
  }
}

export default HomeScreen
