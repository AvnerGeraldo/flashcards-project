import { createStackNavigator } from 'react-navigation'

//Screens
import Decks from '@screens/Decks'
import Quiz from '@screens/Quiz'

export default createStackNavigator({
    'Decks': {
        screen: Decks,
        navigationOptions: {
            header: null
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz',
            headerTintColor: '#000',
            headerStyle: {
                backgroundColor: '#ADD8E6',
            },
        }
    },
}, {
    initialRouteName: 'Decks'
})