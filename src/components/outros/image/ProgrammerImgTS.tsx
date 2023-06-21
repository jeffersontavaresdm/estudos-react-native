import {Image, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';

let url =
  'https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=360';

interface ProgrammerImgTSProps {
  largura: string;
  altura: string;
}

const ProgrammerImgTS: FunctionComponent<ProgrammerImgTSProps> = ({
  largura,
  altura,
}) => {
  const styles = StyleSheet.create({
    image: {
      width: largura,
      height: altura,
      opacity: 0.3,
    },
  });

  return <Image source={{uri: url}} style={styles.image} />;
};

export default ProgrammerImgTS;
