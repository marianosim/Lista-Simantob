import { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles.js';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onHandleChangeItem = text => setTextItem(text);

  const onHandlerModal = (id) => {
    setModalVisible(!modalVisible)
    const selection = itemList.find(item => item.id === id)
    setSelectedItem(selection);
  }

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedItem(null)
  }

  const onHandlerDeleteEvent = (id) => {
    setItemList(itemList.filter(item => item.id !== id));
    setModalVisible(!modalVisible);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item.id)}>
      <Text style={styles.eventItem}>{item.value}</Text>
    </TouchableOpacity>
  )

  const addItem = () => {
    if (textItem.length === 0) return;
    setItemList(items => [
      ...items,
      { id: new Date().toString(), value: textItem }
    ])
    setTextItem('')
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter your event'
          style={styles.input}
          value={textItem}
          onChangeText={onHandleChangeItem}
        />
        <Button title='Add' color='#52528C' onPress={addItem} />
      </View>
      <View style={styles.itemList}>
        <FlatList
          renderItem={renderItem}
          data={itemList}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal visible={modalVisible} animationType='slide' transparent>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Event Detail</Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
            <Text style={styles.selectedEvent}>{selectedItem?.value}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title='Cancel'
              color='#52528C'
              onPress={() => onHandlerCancelModal()}>
            </Button>
            <Button
              title='Delete'
              color='#52528C'
              onPress={() => onHandlerDeleteEvent(selectedItem.id)}>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}