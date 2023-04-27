import { useState } from 'react';
import { View } from 'react-native';
import { Input, ModalItem, EventList } from './components/index.js';
import { styles } from './styles.js';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


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
      <Input
        buttonColor='#52528C'
        buttonTitle='Add'
        onChangeText={text => setTextItem(text)}
        value={textItem}
        placeholder='Enter your event here...'
        onHandleButton={addItem}
      />
      <View style={styles.itemList}>
        <EventList
          data={itemList}
          onHandlerModal={onHandlerModal}
        />
      </View>
      <ModalItem
        visible={modalVisible}
        animationType='slide'
        item={selectedItem}
        onHandlerCancelModal={onHandlerCancelModal}
        onHandlerDeleteEvent={onHandlerDeleteEvent}
        cancelButtonTitle='Cancel'
        deleteButtonTitle='Delete'
        buttonColor='#52528C'
      />
    </View>
  );
}
