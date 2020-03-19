import React, {Component} from 'react';
import {StyleSheet, Image, ActivityIndicator, Alert, View} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
  Input,
} from '@ui-kitten/components';

import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, light as theme} from '@eva-design/eva';

import axios from '../../Axios/axios';

console.disableYellowBox = ['Remote debugger'];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guia: '',
      loading: false,
    };

    this.submit = this.submit.bind(this);
  }

  submit() {
    const {navigation} = this.props;
    const {guia} = this.state;
    this.setState(() => ({
      loading: true,
    }));
    console.log(axios.defaults.baseURL);
    axios
      .get(`?guia=${guia}`)
      .then(response => {
        console.log(response);
        const result = response.data.result;
        if (!result) {
          this.setState(() => ({
            loading: false,
          }));
          Alert.alert(
            'Error',
            response.data.status_message,
            [{text: 'Aceptar', onPress: () => {}}],
            {cancelable: false},
          );
        } else {
          this.setState(() => ({
            loading: false,
          }));
          navigation.navigate('Details', {
            result: result,
          });
        }
      })
      .catch(error => {
        this.setState(() => ({
          loading: false,
        }));
        console.log(error, error.response);
        Alert.alert(
          'Error',
          'Ha ocurrido un error, intenta de nuevo mas tarde',
          [{text: 'Aceptar', onPress: () => {}}],
          {cancelable: false},
        );
      });
  }

  render() {
    const loading = (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#020718" />
      </View>
    );
    const home = (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={theme}>
          <Layout style={styles.container}>
            <Image
              source={{
                uri:
                  'https://casillerosendex.com/wp-content/uploads/2019/09/Logo-1-1.png',
              }}
              style={{width: 200, height: 200, resizeMode: 'contain'}}
            />
            <Text style={styles.text1} category="h1">
              Bienvenido a Casillero Sendex
            </Text>
            <Text style={styles.text} category="s1">
              Consulte el status de su guía
            </Text>
            <Input
              placeholder="Ingrese el número de la guía"
              keyboardType="default"
              style={styles.textInput}
              onChangeText={guia => this.setState({guia})}
            />
            <Button style={styles.likeButton} onPress={this.submit}>
              Consultar
            </Button>
          </Layout>
        </ApplicationProvider>
      </>
    );
    if (this.state.loading) {
      return loading;
    } else {
      return home;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text1: {
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 20,
    backgroundColor: '#94c322',
    borderColor: '#94c322',
    width: '80%',
  },
  textInput: {
    marginVertical: 20,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
