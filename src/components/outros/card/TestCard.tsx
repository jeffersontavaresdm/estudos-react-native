import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Card from './Card';

const TestCard = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  function abirModal() {
    setModalVisible(true);
  }

  function fecharModal() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardArea}>
        <Card>
          <Text style={[styles.text, {fontSize: 30, marginBottom: 8}]}>
            Testando meu Card!
          </Text>
          <TouchableOpacity style={styles.button} onPress={abirModal}>
            <Card>
              <Text style={[styles.text, {textAlign: 'center'}]}>
                Abrir Modal
              </Text>
            </Card>
          </TouchableOpacity>
        </Card>
      </View>
      <Modal animationType={'slide'} visible={modalVisible}>
        <View style={styles.cardArea}>
          <TouchableOpacity style={styles.button} onPress={fecharModal}>
            <Card>
              <Text style={[styles.text, {textAlign: 'center'}]}>
                Fechar Modal
              </Text>
            </Card>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  button: {
    borderRadius: 4,
    margin: 8,
  },
});

export default TestCard;
