import React, { Fragment, useState, useEffect, useContext } from 'react';
import { toJson } from 'unsplash-js';

import unsplash from '../../helpers/unsplash/unsplash';
import IUnsplash, { getUnsplashDataFormated, IExploreProps } from './types';
import List from '../../components/List';

const Explore: React.FC<IExploreProps> = ({ navigation }) => {
  const [images, setImages] = useState<Array<IUnsplash>>([]);

  useEffect(() => {
    unsplash.search.photos('star wars')
    .then(toJson)
    .then(json => setImages(getUnsplashDataFormated(json.results)));
  }, []);

  return (
    <List images={images} onPress={(image: IUnsplash) => navigation.navigate('Detail', { image })} />
  );
};

export default Explore;
