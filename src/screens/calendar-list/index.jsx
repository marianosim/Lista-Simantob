import { useState } from 'react';
import { View, Button } from 'react-native';

import { styles } from './styles';
import { Input, EventList, ModalItem } from '../../components';
import { theme } from '../../constants';

const CalendarList = ({ onNoEvents }) => {
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onHandlerModal = (id) => {
    setModalVisible(!modalVisible);
    const selection = itemList.find((item) => item.id === id);
    setSelectedItem(selection);
  };

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedItem(null);
  };

  const onHandlerDeleteEvent = (id) => {
    setItemList(itemList.filter((item) => item.id !== id));
    setModalVisible(!modalVisible);
  };

  const addItem = () => {
    if (textItem.length === 0) return;
    setItemList((items) => [...items, { id: new Date().toString(), value: textItem }]);
    setTextItem('');
  };

  return (
    <View style={styles.container}>
      <Input
        buttonColor="#52528C"
        buttonTitle="Add"
        onChangeText={(text) => setTextItem(text)}
        value={textItem}
        placeholder="Enter your event here..."
        onHandleButton={addItem}
      />
      {itemList.length <= 0 ? (
        <View style={styles.returnButtonContainer}>
          <Button
            style={styles.returnButton}
            title="Return home"
            onPress={() => onNoEvents()}
            color={theme.colors.secondary}
          />
        </View>
      ) : null}
      <View style={styles.itemList}>
        <EventList data={itemList} onHandlerModal={onHandlerModal} />
      </View>
      <ModalItem
        visible={modalVisible}
        animationType="slide"
        item={selectedItem}
        onHandlerCancelModal={onHandlerCancelModal}
        onHandlerDeleteEvent={onHandlerDeleteEvent}
        cancelButtonTitle="Cancel"
        deleteButtonTitle="Delete"
      />
    </View>
  );
};

export default CalendarList;
