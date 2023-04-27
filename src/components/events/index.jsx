import React from 'react';
import { FlatList } from 'react-native';
import Item from './item/index';

const EventList = ({ data, onHandlerModal }) => {

  const renderItem = ({ item }) => (
    <Item
      onHandlerModal={onHandlerModal}
      item={item}
    />
  )

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

export default EventList;