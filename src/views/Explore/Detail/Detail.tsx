import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, NativeSyntheticEvent } from 'react-native';
import _ from 'underscore';

import { getData, setData } from '../../../helpers/storage';
import { IDetailProps } from './types';

const favouriteFilledIcon = require('../../../assets/favourite.png');
const favouriteBorderIcon = require('../../../assets/bookmark_border-24px.png');

const Detail: React.FC<IDetailProps> = ({ navigation }) => {
  const unsplash = navigation.getParam('image');
  const [desc, setDesc] = useState('');
  const [isFavourite, setFavourite] = useState(false);

  useEffect(() => {
    getData()
    .then(data => {
      data.map(item => {
        if (_.isEqual(item.unsplash, unsplash)) {
          setDesc(item.desc);
          setFavourite(true);
        }
      })
    })
  }, []);

  const addFavourite = () => {
    setData({ unsplash, desc });
    setFavourite(true);
  };

  const onFavourite = () => {
    addFavourite();
  }

  return (
    <View style={styles.container}>
      <Image
        source={unsplash}
        style={styles.imageStyle}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionStyle}>{unsplash.description}</Text>
        <TouchableOpacity onPress={() => onFavourite()}>
          {
            isFavourite
            ? <Image source={favouriteFilledIcon} style={styles.favouriteIconStyle} />
            : <Image source={favouriteBorderIcon} style={styles.favouriteIconStyle} />
          }
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: 'stretch', flex: 1 }}>
        <TextInput
          onChangeText={value => setDesc(value)}
          placeholder="Description"
          placeholderTextColor="white"
          style={styles.inputStyle}
          value={desc}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#303030',
    flex: 1,
    paddingLeft: 16,
    paddingTop: 24,
    paddingRight: 16,
  },
  descriptionContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionStyle: {
    color: 'white',
    flex: 1,
  },
  favouriteIconStyle: {
    height: 24,
    marginLeft: 24,
    tintColor: 'white',
    width: 24,
  },
  inputStyle: {
    borderBottomColor: 'white',
    borderColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    color: 'white',
  },
  imageStyle: {
    borderRadius: 24,
    height: 450,
    marginBottom: 24,
    width: '100%',
  }
});

export default Detail;
