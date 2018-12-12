import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Images, Colors, Metrics } from '../Themes'

export default class SampleContentScreen extends React.Component {
  componentDidMount() {
    // console.log(JSON.stringify(this.props.navigation))
    // this.props.navigation.setParams({ handleAdd: this._handleAdd })
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Text style={styles.text}>{'Simple screen'}</Text>
        <Text style={styles.text}>{'Some count'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.snow,
  },
})
