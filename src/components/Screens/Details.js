import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, View, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Text,
} from 'native-base';
import {ListItem} from 'react-native-elements';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      loading: true,
    };

    this.loadData = this.loadData.bind(this);
  }
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const {navigation} = this.props;
    const result = navigation.getParam('result', {});
    console.log(result);
    this.setState(() => ({
      result: result,
      loading: false,
    }));
  }

  render() {
    const {navigation} = this.props;
    const {result} = this.state;
    const loading = (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#020718" />
      </View>
    );
    const detail = (
      <Container style={styles.container}>
        <Header
          style={{backgroundColor: '#94c322'}}
          androidStatusBarColor="#94c322">
          <Left>
            <Button transparent onPress={() => navigation.navigate('Home')}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Detalle guía</Title>
          </Body>
        </Header>
        <ScrollView style={styles.companies}>
          {result.map((c, i) => (
            <ListItem
              key={i}
              title={
                <View style={styles.TitleView}>
                  <Text style={styles.title}>Fecha: {c.fecha}</Text>
                </View>
              }
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.comentario1}>Status: {c.comentario}</Text>
                  <Text style={styles.comentario2}>{c.comentario2}</Text>
                </View>
              }
              bottomDivider
              containerStyle={styles.resultContainer}
            />
          ))}
        </ScrollView>
      </Container>
    );
    if (this.state.loading) {
      return loading;
    } else {
      return detail;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
  },
  comentario1: {
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'Nunito',
  },
  comentario2: {
    color: '#999',
    fontFamily: 'Nunito',
  },
  companies: {
    backgroundColor: '#ddd',
    padding: 10,
  },
  resultContainer: {
    borderRadius: 5,
    marginVertical: 5,
  },
});
