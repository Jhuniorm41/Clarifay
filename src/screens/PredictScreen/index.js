import React, { Component } from 'react'
import { ActivityIndicator, View, Text, StatusBar, Alert,ListView,TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { NavigationActions } from 'react-navigation'
import { CLARIFAY_KEY } from 'react-native-dotenv'
import Clarifai from 'clarifai'

import BackgroundImage from '../../components/BackgroundImage'
import AnswerNotification from '../../components/AnswerNotification'
import CaptureAndShare from '../../components/CaptureAndShare'
import XPButton from '../../components/XPBouton'

import styles from './styles'


class PredictScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    var ds= new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2})


    this.state = {
      loading: true,
      result: '',
      dataSource: ds.cloneWithRows([])

    }

    this._cancel = this._cancel.bind(this)
  }

  componentDidMount() {
    const clarifai = new Clarifai.App({
      apiKey: 'e6ce54118b62402c8cdf66d885071faa'
    })

    process.nextTick = setImmediate // RN polyfill

    const data = `{this.props.navigation.state.image}`;
    const file = { base64: data };
        var titles = [];
    clarifai.models.predict(Clarifai.FOOD_MODEL,"https://samples.clarifai.com/food.jpg")
      .then(response => {
        const { concepts } = response.outputs[0].data

        if (concepts && concepts.length > 0) {

            for (var i = 0; i < concepts.length; i++) {
              titles.push(concepts[i].name,concepts[i].value);
           }
           this.setState({
            dataSource: this.state.dataSource.cloneWithRows(titles),
            loading: false
           })

        }

        this.setState({ loading: false })
      })
     
  }

  _cancel() {
    const backAction = NavigationActions.back()
    this.props.navigation.dispatch(backAction)
  }



  render() {
      const { type, data } = `${this.props.navigation.state.image}`
    const sourceImage = `data:${type};base64,${data}`

    return (
       <View style={styles.container}>
            <Text>CARACTERISTICAS</Text>
           <ListView 
             enableEmptySections={true}
             dataSource={this.state.dataSource}
             renderRow={this.renderRow.bind(this)}>
           </ListView>
       </View>
    )
  }

   pressCell(dataRow){
       Alert.alert(dataRow);
  }
    renderRow(dataRow){
      return (
       <TouchableOpacity
                  style={styles.button}
                 onPress={() => this.props.navigation.navigate('Service')}
                >
              <Text>{dataRow}</Text>
                </TouchableOpacity>
      )
    }
}

PredictScreen.propTypes = {
  navigation: PropTypes.object,
}

export default PredictScreen
