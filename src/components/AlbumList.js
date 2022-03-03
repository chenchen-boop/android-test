import React from "react";
import { StyleSheet,ScrollView,View } from "react-native";
import AlbumDetail from "./AlbumDetail";
import albumData from "../json/albums";

const Albumlist = () => {
  return (
    <ScrollView style={styles.scrollviewstyle}>
      <View style={styles.box}></View>
      <AlbumDetail album = {albumData[0]} />
      <AlbumDetail album = {albumData[1]} />
      <AlbumDetail album = {albumData[2]} />
      <AlbumDetail album = {albumData[3]} />
      <AlbumDetail album = {albumData[4]} />
      
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollviewstyle:{
    // backgroundColor: "black",
  },
  box:{
    backgroundColor: "black",
    position:"absolute",
  }
  
});

export default Albumlist;

