import React from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import {Lesson} from '../types/Lesson';
import ListItem from './ListItem.tsx';

interface LessonsListProps {
  lessons: Lesson[];
}

const LessonList: React.FC<LessonsListProps> = ({lessons}) => {
  const renderLessonItem = ({item}: {item: Lesson}) => (
    <ListItem
      title={item.name}
      subtitle=""
      image="https://manitou.org.il/joomlatools-files/docman-images/shiurim.audio.jpg"
      onClick={() => {
        console.log('test');
      }}
    />
  );

  return (
    <FlatList
      data={lessons}
      renderItem={renderLessonItem}
      keyExtractor={item => item.id.toString()}
      style={{flex: 1}}
    />
  );
};

export default LessonList;
