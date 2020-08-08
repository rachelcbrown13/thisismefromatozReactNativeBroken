import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import About from './AboutComponent';
import Profiles from './ProfilesComponent';
import Home from './HomeComponent';
import CharacterCard from './CharacterCardComponent';

const ProfilesNavigator = createStackNavigator(
    {
        Profiles: { screen: Profiles },
        CharacterCard: { screen: CharacterCard }
    },
    {
        initialRouteName: 'Profiles',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#cea400'
            }
        }
    }
);

const HomeNavigator = createStackNavigator (
    {
        Home: { screen: Home }
    }
);

const AboutNavigator = createStackNavigator (
    {
        About: { screen: About }
    }
);

const MainNavigator = createDrawerNavigator(
     {
         Home: { screen: HomeNavigator},
         Profiles: { screen: ProfilesNavigator},
         About: { screen: AboutNavigator}
     }                                        
);

class Main extends Component{
    render(){
        return(
            <View>
                <MainNavigator/>
            </View>
        );
    }
}

export default Main;