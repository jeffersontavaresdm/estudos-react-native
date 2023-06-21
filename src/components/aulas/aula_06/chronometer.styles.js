import {StyleSheet} from 'react-native';

const chronometerStyles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  chronometer: {},
  timer: {
    fontSize: 150,
    fontWeight: 'bold',
    color: '#000',
    position: 'absolute',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 30,
    borderColor: '#00aaef',
    padding: 8,
    width: 120,
    margin: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  buttonArea: {
    flexDirection: 'row',
    marginTop: 360,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    fontStyle: 'italic',
  },
});

export default chronometerStyles;
