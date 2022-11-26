
import { View } from 'react-native';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Gameboard from './Components/Gameboard';
import styles from './style/style';


export default function App() {
  return (
    <View style={styles.container}>
     <Header/>
     <Gameboard/>
     <Footer/>
    </View>
  );
}
