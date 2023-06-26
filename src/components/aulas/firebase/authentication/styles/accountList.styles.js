import {StyleSheet} from 'react-native';

const accountListStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 'auto',
  },
  modalButton: {
    padding: 10,
    width: 100,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#808080',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default accountListStyles;
