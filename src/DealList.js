import React from 'react';
import {StyleSheet, ScrollView, View, Text, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import DealItem from './DealItem';

export default class DealList extends React.Component {
  static propTypes = {
    deals: PropTypes.array.isRequired,
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.props.deals}
          renderItem={({item}) => <DealItem>{item.title}</DealItem>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
  },
});
