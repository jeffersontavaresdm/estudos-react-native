import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#F6F6F6',
    margin: 4,
    borderWidth: 2,
    borderRadius: 8,
    padding: 24,
    width: 200,
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userArea: {
    backgroundColor: '#088F8F',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    elevation: 6,
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  inputButton: {
    backgroundColor: '#088F8F',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  voltarButton: {
    marginBottom: 16,
    marginTop: 8,
    width: 200,
    backgroundColor: '#DDD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 8,
    padding: 24,
  },
});

export default styles;
