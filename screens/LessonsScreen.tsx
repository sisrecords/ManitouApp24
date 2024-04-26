import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {getCategoryDetails} from '../services/api';
import {Lesson} from '../types/Lesson';
import LessonList from '../components/LessonList';
import Loader from '../components/Loader';
import React, {useEffect, useState} from 'react';
import {Category} from '../types/Category.ts';
import CategoryList from '../components/CategoryList.tsx';
import Icon from 'react-native-vector-icons/FontAwesome';

interface LessonListScreenProps {
  route: {
    params: {
      categoryId: number;
      categoryName: string;
    };
  };
  navigation: any;
}
const LessonListScreen: React.FC<LessonListScreenProps> = ({
  route,
  navigation,
}) => {
  const {categoryId, categoryName} = route.params;
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchLessons();
  }, [categoryId]);
  const fetchLessons = async () => {
    try {
      const res = await getCategoryDetails(categoryId);
      setLessons(res.lessons);
      setSubCategories(res.subCategories);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching songs:', error);
      setLoading(false);
    }
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 16,
            marginBottom: 16,
            flex: 0,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-right"
              size={20}
              color="black"
              style={{marginLeft: 16, marginRight: 16}}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>{categoryName}</Text>
        </View>
        <View style={{flex: 1, paddingLeft: 2}}>
          {!!subCategories.length && (
            <CategoryList categories={subCategories} navigation={navigation} />
          )}
          {!!lessons?.length && <LessonList lessons={lessons} />}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LessonListScreen;
