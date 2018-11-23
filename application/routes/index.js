import React from 'react'
import { createStackNavigator } from 'react-navigation'

//Components
import Deck from '@components/Menu'
import NewDeck from '@components/Menu'

const AppNavigator = createStackNavigator({
    Deck: {
        screen: Deck,
    },
    NewDeck: {
        screen: Deck,
    },
},
{
    initialRouteName: 'Deck',
    mode: 'card',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }    
})

export default AppNavigator