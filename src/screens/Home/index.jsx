import { PureComponent } from 'react'
import { API_URL } from '../../init'
import { styles } from './styles'
import { View, FlatList } from 'react-native'
import axios from 'axios'
import PropTypes from 'prop-types'
import BasicSearch from './BasicSearch'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import BookResult from '../../components/BookResult'

class HomeScreen extends PureComponent {
  state = {
    loading: true,
    recommendations: [],
    error: null
  }

  componentDidMount () {
    this.loadRecommendations()
  }

  loadRecommendations () {
    if (!this.state.loading) this.setState({ loading: true })
    axios.get(API_URL)
      .then((response) => this.setState({
        loading: false,
        recommendations: response.data
      }))
      .catch((e) => this.setState({ loading: false, error: 'Deu erro!\n' + toString(e) }))
  }

  render () {
    const renderItem = ({ item, index }) => (
      <BookResult
        key={index}
        data={item}
        navigation={this.props.navigation}
      />
    )
    return (
      <View style={styles.flex}>
        <BasicSearch navigation={this.props.navigation} />
        <View style={styles.flex}>
          {this.state.loading
            ? <Loading message="Carregando recomendações..." />
            : (this.state.error
                ? <Error
                  message="Falha ao carregar resultados da pesquisa!"
                  onRetryPress={() => this.loadRecommendations()} />
                : <FlatList
                  data={this.state.recommendations}
                  renderItem={renderItem} />
              )}
        </View>
      </View>
    )
  }
}
HomeScreen.propTypes = { navigation: PropTypes.object.isRequired }

export default HomeScreen
