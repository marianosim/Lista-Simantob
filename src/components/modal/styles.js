import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Nunito-Regular',
  },
  modalTitle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 20,
  },
  modalDetailMessage: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#212121',
  },
  selectedEvent: {
    fontFamily: 'Nunito-Bold',
    fontSize: 14,
    color: '#212121',
    paddingVertical: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    fontFamily: 'Nunito-Regular',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
