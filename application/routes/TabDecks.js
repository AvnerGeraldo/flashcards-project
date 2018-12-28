import React from 'react'
import { createStackNavigator, HeaderBackButton, StackActions, NavigationActions } from 'react-navigation'

//Screens
import Decks from '@screens/Decks'
import Quiz from '@screens/Quiz'
import Score from '@screens/Score'
import AddCard from '@screens/AddCard'

export default createStackNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            header: null
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz',
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#ADD8E6',
            },
        }
    },
    Score: {
        screen: Score,
        navigationOptions: ({ navigation: { state: { params }, dispatch }}) => ({
            title: `Score of ${params.deck}`,
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#ADD8E6',
            },
            headerLeft: (
                <HeaderBackButton 
                    tintColor='#FFF'
                    onPress={() => {
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'Decks' })]
                        })

                        dispatch(resetAction)
                    }}                    
                />
            )
        })
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            title: 'Add Card',
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#ADD8E6',
            },
        }
    },
}, {
    initialRouteName: 'Decks'
})