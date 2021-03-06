import React from 'react';
import {StyleSheet, Image, View, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';

export default class DealList extends React.Component {
  static propTypes = {
    deal: PropTypes.object.isRequired,
  };
  render() {
    const {deal} = this.props;

    return (
      <View>
        <Image source={{uri: deal.media[0]}} style={styles.image} />
        <Text>{deal.title}</Text>
        <Text>{deal.price}</Text>
        <Text>{deal.cause.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
})
