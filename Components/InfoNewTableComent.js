import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button} from 'react-native';
import BodyInfoNews from "./BodyInfoNew"

const DATA = [
  {
    title: 'Like',
  },
  {
    title: 'Dislike',
  },
  {
    title: 'LoL',
  },
  {
    title: 'Save',
  },
  {
    title: 'Bullish',
  },
  {
    title: 'Bearish',
  },
  {
    title: 'Important',
  },
  {
    title: 'Toxic',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        numColumns={4}
        keyExtractor={(item,index)=>{return index}}
      />
      </>
  );
}
    
const styles = StyleSheet.create({
  container: {
    marginBottom:100,
  },
  item: {
    width: "25%",
    borderColor:"white",
    padding: 8,
    borderWidth: 0.5,
    flexDirection: 'row',

    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  
});

export default App;