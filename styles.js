import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#52528C',
    color: '#212121',
  },
  itemList: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 20,
  },
  itemContainer: {
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#52528C',
    borderRadius: 5,
    marginVertical: 10,
  },
  eventItem: {
    fontSize: 16,
    color: 'white',
    marginHorizontal: 10,
    fontWeight: 'bold'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  modalDetailContainer: {
    paddingVertical: 20
  },
  modalDetailMessage: {
    fontSize: 14,
    color: '#212121'
  },
  selectedEvent: {
    fontSize: 14,
    color: '#212121',
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
    marginBottom: 20
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
