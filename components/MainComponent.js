import React, { Component } from 'react';
import { View, Text, Platform, Image, ScrollView } from 'react-native';
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
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#cea400'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
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
            <View style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                }}>
                <MainNavigator/>
                <Image 
                    source={require('./images/FrontCover.png')}
                    style={{width: 400, height:400}}
                />                 
            </View>
        );
    }
}

export default Main;