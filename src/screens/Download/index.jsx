import { PureComponent } from 'react'
import { API_URL } from '../../init'
import { View, Text, Image, ScrollView } from 'react-native'
import axios from 'axios'
import PropTypes from 'prop-types'
import styles from './styles'
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import Link from './Link'

class DownloadScreen extends PureComponent {
  state = { loading: true, data: {}, error: '' }

  componentDidMount = () => this.getDownloadData()

  getDownloadData () {
    const onResponse = (response) => this.setState({
      data: response.data,
      loading: false
    })
    // TODO: Create a correct error handling when not response was received
    const onError = (error) => this.setState({
      error: toString(error),
      loading: false
    })

    const params = { path: this.props.route.params.path }
    axios.get(`${API_URL}/download`, { params }).then(onResponse).catch(onError)
  }

  renderDescription = () => (
    <Text style={styles.description}>
      {'   • ' + this.state.data.description}
    </Text>
  )

  renderDownloadLinks = () => this.state.data.download_links.map(
    (item, index) => (<Link key={index} {...item} />)
  )

  renderDownloadInformation () {
    const authors = this.state.data.authors.join(', ')
    return (
      <View style={styles.contentContainer}>
        <View style={styles.thumbnailContainer}>
          <Image
            source={{ uri: this.state.data.thumbnail_url }}
            resizeMode="contain"
            style={styles.thumbnail}
          />
        </View>
        <Text style={styles.title}>{this.state.data.title}</Text>
        <Text style={styles.authors}>{authors}</Text>
        {this.state.data.description ? this.renderDescription() : null}
        <View style={styles.downloads}>{this.renderDownloadLinks()}</View>
      </View>
    )
  }

  render = () => <>
    {this.state.loading
      ? <View style={styles.flex}>
          <Loading message="Getting data..." />
        </View>
      : (this.state.error
          ? <Error message={this.state.error} />
          : <ScrollView>{this.renderDownloadInformation()}</ScrollView>
        )
    }
  </>
}
DownloadScreen.propTypes = { route: PropTypes.object.isRequired }

export default DownloadScreen
