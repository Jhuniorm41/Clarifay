import React, { Component } from 'react'
import { View, ActivityIndicator, Text, Alert, } from 'react-native'
import PropTypes from 'prop-types'
import Share from 'react-native-share'
import { captureScreen } from 'react-native-view-shot'
import XPButton from '../XPBouton'

class CaptureAndShare extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
    }

    this._onShareClick = this._onShareClick.bind(this)
  }

  _onShareClick() {
    this.setState({loading: true})
    captureScreen({
      format: 'png',
      quality: 0.8,
      result: 'base64'
    })
    .then(uri => {
      const image = `data:image/png;base64,${uri}`
      
      const shareOptions = {
        title: 'capura',
        message: 'analisis',
        url: image,
        subject: ''
      }

      Share.open(shareOptions)
        .then(info => {
          if(info.message === 'OK') {
            this.props.onCancel()
          }
        })
    })
    .catch(e => {
      Alert.alert(
        'error',
      
        [
          {text: 'OK', onPress: () => {
            this.props.onCancel()
          }},
        ],
        { cancelable: false }
      )
    })
    this.setState({loading: false})
  }

  render() {
    return (
      <View>
        { 
          !this.state.loading ? 
            <XPButton
              title={this.props.title}
              color={this.props.color}
              onPress={this._onShareClick}
            /> :
              <View>
                <ActivityIndicator size="large" color="#3498db" />
                <Text>preaparar para la captura</Text>
              </View>
        }
      </View>
    )
  }
}

CaptureAndShare.propTypes = {
  onCancel: PropTypes.func,
  title: PropTypes.string,
  color: PropTypes.string,
}

export default CaptureAndShare
