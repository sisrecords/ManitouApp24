import {IListItem} from '../types/ListItem.ts';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          marginRight: 16,
          flex: 1,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: 5,
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
          justifyContent: 'flex-start',
          height: '100%',
          width: '100%',
        }}>
        {item.locked && (
          <Icon
            name="lock"
            size={20}
            color="black"
            style={{marginLeft: 16, marginRight: 16}}
          />
        )}
      </View>
    </View>
  </TouchableOpacity>
);

export default ListItem;
