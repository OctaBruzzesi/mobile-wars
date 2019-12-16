import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Detail from '../views/Explore/Detail';
import Explore from '../views/Explore';
import Favourites from '../views/Favourites';

const ExploreTab = createStackNavigator({
  Explore: {
    screen: Explore,
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Detail',
    },
  },
});

const FavouritesTab = createStackNavigator({
  Favourites: {
    screen: Favourites,
  },
});

const Application = createBottomTabNavigator({
  Explore: {
    screen: ExploreTab,
    navigationOptions: {
      title: 'Explore'
    },
  },
  Favourites: {
    screen: FavouritesTab,
    navigationOptions: {
      title: 'Favourites',
    },
  },
});



export default Application;