import { PureComponent } from 'react'
import { API_URL } from '../../init'
import { View, Text, Image, ScrollView } from 'react-native'
import axios from 'axios'
import styles from './styles'
import Loading from '../../components/Loading'
import Link from './Link'

class DownloadScreen extends PureComponent {
  state = {
    downloadInformation: null,
    loading: true,
    error: null
  }

  componentDidMount = () => this.getDownloadInformation()

  getDownloadInformation () {
    axios.get(`${API_URL}/download`, { params: { path: this.props.route.params.path } })
      .then(response => this.setState({ downloadInformation: response.data, loading: false }))
      .catch(error => this.setState({ error: toString(error), loading: false }))
  }

  renderDownloadInformation () {
    const authors = this.state.downloadInformation.authors.join(', ')
    return (
      <View style={styles.contentContainer}>
        <View style={styles.thumbnailContainer}>
          <Image
            source={{ uri: this.state.downloadInformation.thumbnail_url }}
            resizeMode="contain"
            style={styles.thumbnail}
          />
        </View>
        <Text style={styles.title}>{this.state.downloadInformation.title}</Text>
        <Text style={styles.authors}>{authors}</Text>
        {this.state.downloadInformation.description
          ? <Text style={styles.description}>
              {'   • ' + this.state.downloadInformation.description}
            </Text>
          : null}
        <View style={styles.downloads}>
          {this.state.downloadInformation.download_links.map((item, index) => (
            <Link key={index} {...item} />
          ))}
        </View>
      </View>
    )
  }

  render () {
    if (this.state.loading) {
      return (
        <View style={styles.flex}>
          <Loading message="Obtendo informações..." />
        </View>
      )
    }
    return (<ScrollView>{this.renderDownloadInformation()}</ScrollView>)
  }
}

export default DownloadScreen
