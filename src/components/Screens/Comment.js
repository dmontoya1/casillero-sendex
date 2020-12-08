import React, {Component} from 'react';
import {StyleSheet, Linking, Button} from 'react-native';
import {
  Text,
} from 'native-base';

export default class CustomComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      loading: true,
    };
  }

  handleClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
  };

  render() {
    var {comment} = this.props
    if (comment.indexOf("<a href") > -1) {
      var res = comment.split("<a ");
      var res2 = res[1].split(" ")
      var res3 = res2[0].split("\"")
      var url = res3[1]
      return <Button color="#94c322" title="Status transportadora" onPress={ ()=>{ 
        Linking.canOpenURL(url)
        .then((supported) => {
          if (!supported) {
            console.log("Can't handle url: " + url);
          } else {
            return Linking.openURL(url);
          }
        })
        .catch((err) => console.error('An error occurred', err));
      }} />
    }
    return <Text style={styles.comentario2}>{comment}</Text>;
    
  }
}

const styles = StyleSheet.create({
  comentario2: {
    color: '#999',
    fontFamily: 'Nunito',
  },
});
