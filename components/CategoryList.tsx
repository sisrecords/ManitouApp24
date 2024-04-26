import React from 'react';
import {FlatList, TouchableOpacity, Text, View, Image} from 'react-native';
import {Category} from '../types/Category';
import {IListItem} from '../types/ListItem.ts';
import ListItem from './ListItem.tsx';

interface CategoryListProps {
  categories: Category[];
  navigation: any;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  navigation,
}) => {
  const renderCategoryItem = ({item}: {item: Category}) => (
    <ListItem
      title={item.name}
      subtitle={item.artist}
      image={item.image}
      onClick={() => {
        navigation.navigate('CategoryDetails', {
          categoryId: item.id,
          categoryName: item.name,
        });
      }}
    />
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={item => item.id.toString()}
      style={{flex: 0}}
    />
  );
};

export default CategoryList;
