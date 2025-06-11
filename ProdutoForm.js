import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Produto } from './dados/Produto';
import GestorDados from './dados/GestorDados';
import { styles } from './CommonStyles';

export default function ProdutoForm({ navigation }) {
  const gestor = new GestorDados();
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const salvar = () => {
    const prod = new Produto(parseInt(codigo), nome, parseInt(quantidade));
    gestor.adicionar(prod).then(() => navigation.navigate('ListaProd'));
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Código" keyboardType="numeric" style={styles.input} onChangeText={setCodigo} />
      <TextInput placeholder="Nome" style={styles.input} onChangeText={setNome} />
      <TextInput placeholder="Quantidade" keyboardType="numeric" style={styles.input} onChangeText={setQuantidade} />
      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonTextBig}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
