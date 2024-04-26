import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {getCategories} from '../services/api';
import {Category} from '../types/Category';
import CategoryList from '../components/CategoryList';
import Loader from '../components/Loader';

const CategoriesScreen: React.FC = ({navigation}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <CategoryList categories={categories} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
