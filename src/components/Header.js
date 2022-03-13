import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.titletextStyle}>Different On Levels The Lord Allowed  </Text>
        <Text style={styles.authortextStyle}>Dame D.O.L.L.A</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#404040",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 4
  },
  titletextStyle: {
    fontSize: 20,
    //fontFamily: "Gill Sans Extrabold", sans-serif,
    fontStyle:'italic',
    //fontFamily:'bold',
    //font:''
    fontWeight:"300",
    color:"#D10000",
  },
  authortextStyle:{
    fontSize: 15,
    fontStyle:'italic',
    //fontFamily:'bold',
    //font:''
    fontWeight:"300",
    color:"#E3E3E3",
    
    // right:100,
  }
});

export default Header;