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
    error: ''
  }

  componentDidMount = () => this.loadRecommendations()

  loadRecommendations () {
    const onResponse = (response) => this.setState({
      loading: false,
      recommendations: response.data
    })
    const onError = (error) => this.setState({
      loading: false,
      error: 'Deu erro!\n' + toString(error)
    })

    axios.get(API_URL).then(onResponse).catch(onError)
  }

  renderBookItem = ({ item, index }) => (
    <BookResult
      key={index}
      data={item}
      navigation={this.props.navigation}
    />
  )

  renderRecommendations = () => (
    <FlatList
      data={this.state.recommendations}
      renderItem={this.renderBookItem} />
  )

  renderError = () => (
    <Error
      message="Falha ao carregar resultados da pesquisa!"
      onRetryPress={() => this.loadRecommendations()} />
  )

  render = () => (
    <View style={styles.flex}>
      <BasicSearch navigation={this.props.navigation} />
      <View style={styles.flex}>
        {this.state.loading
          ? <Loading message="Carregando recomendações..." />
          : (this.state.error ? this.renderError() : this.renderRecommendations())}
      </View>
    </View>
  )
}
HomeScreen.propTypes = { navigation: PropTypes.object.isRequired }

export default HomeScreen
