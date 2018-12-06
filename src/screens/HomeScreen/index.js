import React, { Component } from 'react'
import { Alert, View, StatusBar, ActivityIndicator,ImageBackground, TouchableOpacity,Text } from 'react-native'
import PropTypes from 'prop-types'
import { StackNavigator } from 'react-navigation';
import ImagePicker from 'react-native-image-picker'

import Header from '../../components/Header'
import BackgroundImage from '../../components/BackgroundImage'
import XPButton from '../../components/XPBouton'
import Guia from './Guia'
import styles from './styles'
class HomeScreen extends Component {
  static navigationOptions = {
    header: <Header title='TU SALUD' subtitle='"Te ofrecemos esta ayuda"' />,
  }
  
  constructor() {
    super()

    this.state = {
      loading: false,
    }
    
    this._onClick = this._onClick.bind(this)
    
    this.options = {
      title: 'seleccione una imagen',
      takePhotoButtonTitle: 'Capturar Alimento',
      chooseFromLibraryButtonTitle: 'ir a galeria',
      cancelButtonTitle: 'Cancelar',
      cameraType: 'back',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'cuida tu alimentacion'
      }
    }    
  }

  _onClick() {
    this.setState({ loading: true })
    ImagePicker.showImagePicker(this.options, response => {
      if (response.didCancel) {
        this.setState({ loading: false })
      } else if (response.error) {
        Alert.alert('Error', 'galeria no encontrada', { cancelable: false })
        this.setState({ loading: false })
      } else {
        const { navigate } = this.props.navigation
        navigate('Prediction', { image: response })
        this.setState({ loading: false })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
          <StatusBar hidden />
          <BackgroundImage source={require('../../assets/bkg.jpg')}>
            {
              !this.state.loading ?
                  <XPButton
                    title='Analizar Imagen'
                    onPress={this._onClick}
                  > </XPButton>
              : <ActivityIndicator size="large" color="#e74c3c" />
            }

           <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.push('Guias')}
                >
              <Text>ver consejos </Text>
                </TouchableOpacity>

          </BackgroundImage>
      </View>
    )
  }
}



   const RootStack = StackNavigator(
  {
     Guias: {
      screen: Guia,
    }, 
     }
   );
HomeScreen.propTypes = {
  navigation: PropTypes.object,
}

export default HomeScreen
