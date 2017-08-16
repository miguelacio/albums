//importar la libreria para crear el componente
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//crear el componente
const App = () => (
  <View style={{flex: 1}}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);
//renderizar
AppRegistry.registerComponent('albums', () => App);