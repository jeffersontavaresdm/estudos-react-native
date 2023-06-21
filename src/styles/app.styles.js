import {StyleSheet} from 'react-native';

export const appStyles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  child: {
    width: '50%',
    height: 100,
    flex: 1,
    backgroundColor: 'darkgray',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'black',
  },
  imgView: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
});
