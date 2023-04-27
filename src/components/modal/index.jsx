import React from 'react';
import { Modal, View, Text, Button } from 'react-native';
import { styles } from './styles';

const ModalItem = ({ visible, animationType, onHandlerDeleteEvent, onHandlerCancelModal, item, buttonColor, cancelButtonTitle, deleteButtonTitle }) => {
    return (
        <Modal visible={visible} animationType={animationType} >
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Event Detail</Text>
                <View style={styles.modalDetailContainer}>
                    <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
                    <Text style={styles.selectedEvent}>{item?.value}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={cancelButtonTitle}
                        color={buttonColor}
                        onPress={() => onHandlerCancelModal()}>
                    </Button>
                    <Button
                        title={deleteButtonTitle}
                        color={buttonColor}
                        onPress={() => onHandlerDeleteEvent(item.id)}>
                    </Button>
                </View>
            </View>
        </Modal>
    )
}

export default ModalItem;