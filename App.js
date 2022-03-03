import React from "react";
import { StyleSheet, StatusBar, SafeAreaView,View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.box}></View>
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#D10000",
  },
  // box:{
  //   height:700,
  //   width:400,
  //   backgroundColor:"#D10000",
  //   position:"absolute",
  //   // top:10,
  // }
});


export default App;