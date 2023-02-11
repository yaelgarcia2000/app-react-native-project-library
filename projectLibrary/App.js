import React, {useState} from 'react';
import AutorPage from './src/pages/AutorPage';
import LoginPage from './src/pages/LoginPage';
import TipoLibroPage from './src/pages/TipoLibroPage';
import {NativeBaseProvider, Box} from 'native-base';
import LibroPage from './src/pages/LibroPage';

const App = () => {
  return (
    <>
      <NativeBaseProvider>
        <LibroPage />
      </NativeBaseProvider>
    </>
  );
};

export default App;
