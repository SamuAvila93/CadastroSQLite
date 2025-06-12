import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ProdutoForm from './ProdutoForm';
import ProdutoLista from './ProdutoLista';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaProd">
        <Stack.Screen name="ListaProd" component={ProdutoLista} options={{ title: 'Produtos' }} />
        <Stack.Screen name="NovoProd" component={ProdutoForm} options={{ title: 'Novo Produto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
