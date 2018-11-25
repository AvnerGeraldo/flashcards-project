import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

//Screens
import Decks from '@screens/Decks'
import NewDeck from '@screens/NewDeck'

//Routes
import TabDecks from './TabDecks'

export default createBottomTabNavigator({
    Decks: {
        screen: TabDecks,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='ios-albums' color={tintColor}/>
            )
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='ios-add' size={25} color={tintColor}/>
            )
        }
    }
},
{
    initialRouteName: 'Decks',
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        showIcon: true,
    }
})