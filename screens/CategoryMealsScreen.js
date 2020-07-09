import React from 'react';
import { View, Text, Button, StyleSheet} from "react-native";
import {CATEGORIES} from "../data/dummy-data";

const CategoryMealsSceen = props => {
  const categoryId = props.navigation.getParam('categoryId');
  console.log(categoryId);
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
  console.log(selectedCategory);
  console.log(CATEGORIES);
  return (
      <View style={styles.screen}>
        <Text>The Categories Screen!</Text>
        <Text>{selectedCategory.title}</Text>
      </View>
  )
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsSceen;
