import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Button} from 'react-native';
import {getCategories} from '../services/api';
import {Category} from '../types/Category';
import CategoryList from '../components/CategoryList';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CategoriesScreen: React.FC = ({navigation}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
      const authKey = await AsyncStorage.getItem('authKey');

      setLoggedIn(!!authKey);

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
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingRight: '100',
          }}>
          {!loggedIn && (
            <Button
              title="התחבר"
              onPress={() => navigation.navigate('Login')}
            />
          )}
          {loggedIn && (
            <Button
              title="התנתק"
              onPress={async () => {
                await AsyncStorage.removeItem('authKey');
                setLoggedIn(false);
              }}
            />
          )}
        </View>
        <CategoryList categories={categories} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
