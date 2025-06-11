import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './CommonStyles';

export default function ProdutoItem({ produto, onDelete }) {
  return (
    <View style={styles.itemsContainer}>
      <Text style={styles.textItem}>
        {produto.codigo} - {produto.nome}
      </Text>
      <Text style={styles.textItem}>Quantidade: {produto.quantidade}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}
