import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const Item = ({ item, onHandlerModal }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item.id)}>
            <Text style={styles.eventItem}>{item.value}</Text>
        </TouchableOpacity>
    )
};

export default Item;
