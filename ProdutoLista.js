import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import GestorDados from './dados/GestorDados';
import ProdutoItem from './ProdutoItem';
import { styles } from './CommonStyles';
import { useIsFocused } from '@react-navigation/native';

export default function ProdutoLista({ navigation }) {
  const gestor = new GestorDados();
  const [produtos, setProdutos] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    gestor.obterTodos(setProdutos);
  }, [isFocused]);

  const excluirProduto = codigo => {
    gestor.remover(codigo.toString()).then(() => gestor.obterTodos(setProdutos));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NovoProd')}>
        <Text style={styles.buttonTextBig}>Novo Produto</Text>
      </TouchableOpacity>
      <FlatList
        data={produtos}
        keyExtractor={item => item.codigo.toString()}
        renderItem={({ item }) => (
          <ProdutoItem produto={item} onDelete={() => excluirProduto(item.codigo)} />
        )}
      />
    </View>
  );
}
