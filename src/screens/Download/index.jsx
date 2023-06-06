import { PureComponent } from 'react'
import { API_URL } from '../../init'
import { View, Text, Image, ScrollView } from 'react-native'
import axios from 'axios'
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
      <ScrollView style={{ padding: 6 }}>
        <View style={{ flex: 1, alignItems: 'center', padding: 16 }}>
          <Image
            source={{ uri: this.state.downloadInformation.thumbnail_url }}
            resizeMode="contain"
            style={{ borderRadius: 12, width: 200, height: 354 }}
          />
        </View>
        <Text style={{ textAlign: 'center', marginBottom: 4, fontSize: 24 }}>{this.state.downloadInformation.title}</Text>
        <Text style={{ textAlign: 'center', marginBottom: 10, fontSize: 13, fontStyle: 'italic' }}>{authors}</Text>
        <Text style={{ textAlign: 'left', marginBottom: 10, fontSize: 15 }}>{'   • ' + this.state.downloadInformation.description}</Text>
        <View style={{ flex: 1, alignItems: 'center' }}>
          {this.state.downloadInformation.download_links.map((item, index) => (
            <Link key={index} {...item} />
          ))}
        </View>
      </ScrollView>
    )
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        {this.state.loading
          ? <Loading message="Obtendo informações..." />
          : this.renderDownloadInformation()
        }
      </View>
    )
  }
}

export default DownloadScreen
