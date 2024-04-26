import {IListItem} from '../types/ListItem.ts';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ListItem = (item: IListItem) => (
  <TouchableOpacity onPress={() => item.onClick()}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 16,
      }}>
      <Image
        source={{uri: item.image}}
        style={{width: 50, height: 50, borderRadius: 25, marginRight: 16}}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 16,
            maxWidth: 300,
            fontWeight: 'bold',
            textAlign: 'left',
            flexWrap: 'wrap',
          }}>
          {item.title}
        </Text>
        <Text style={{fontSize: 14, color: 'gray'}}>{item.subtitle}</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 14, color: 'gray'}}>{item.extraData}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ListItem;
