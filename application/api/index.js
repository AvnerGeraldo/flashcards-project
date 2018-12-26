import { AsyncStorage } from 'react-native'

//Token
import { token } from './token'

//Initial Data
import initialData from './initialData'

export const setInitialData = async() => {
    try {
        if (AsyncStorage.getItem(token)) {
            await AsyncStorage.setItem(token, JSON.stringify(initialData))
        }
        return { save: true }
    } catch(error) {
        return { error }
    }
}

const getDataOnAsyncStorage = async() => {
    return await AsyncStorage.getItem(token)
        .then(res => JSON.parse(res))
}

export const getDecks = async() => {
    try {
        return await getDataOnAsyncStorage()
    } catch(error) {
        return { error }
    }
}

export const getDeck = async(title) => {
    try {
        const allData = await getDataOnAsyncStorage()
        return allData[title] ? allData[title] : []        
    } catch(error) {
        return { error }
    }
}

export const saveDeckTitle = async(title) => {
    try {
        //Verify if title is empty
        if (title.length === 0) {
            throw new Error('Please fill field with title of the deck.')
        }

        //Get data API
        const allData = await getDataOnAsyncStorage()

        //New Deck object
        const newDeck = {
            [title]: {
                title,
                questions: []
            }
        }

        //Merge in data API    
        //Set the new data on AsyncStorage
        await AsyncStorage.setItem(token, JSON.stringify({
            ...allData,
            ...newDeck
        }))

        //Return the new value
        return { save: true }
    } catch(error) {
        return { error }
    }
}

export const addCardToDeck = async(title, card) => {
    try {
        //Get data API
        const allData = await getDataOnAsyncStorage()

        //Keys
        const arrayAllDataKeys = Object.keys(allData)

        //Get deck in API
        const deck = arrayAllDataKeys.filter(titleOfDeck => titleOfDeck === title && allData[title])

        //Exists the deck?
        if (!deck) {
            throw new Error('Error: Deck not exists! Add card to deck.')
        }
        
        //Add Card to deck
        allData[title].questions.push(card)    
    
        //Set the new data on AsyncStorage
        await AsyncStorage.setItem(token, JSON.stringify(allData))

        //Return the new value
        return { save: true }
    } catch(error) {
        return { error }
    }
}

export const saveAnswerQuestion = async(title, indexQuestion, answered) => {
    try {
        //Get data API
        const allData = await getDataOnAsyncStorage()

        //Keys
        const arrayAllDataKeys = Object.keys(allData)

        //Get deck in API
        const deck = arrayAllDataKeys.filter(titleOfDeck => titleOfDeck === title && allData[title])

        //Exists the deck?
        if (!deck) {
            throw new Exception('Error: Deck not exists! Add card to deck.')
        }
        
        //Add answer in question
        allData[title].questions[indexQuestion].answered = answered
        
        //Set the new data on AsyncStorage
        await AsyncStorage.setItem(token, JSON.stringify(allData))

        //Return the new value
        return { save: true }
    } catch(error) {
        return { error }
    }
}