import {StyleSheet} from 'react-native';

export const programmerStyles = (largura, altura) => {
  return StyleSheet.create({
    image: {
      width: largura,
      height: altura,
      opacity: 0.3,
    },
  });
};
