import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//Action
import { SAVE_ANSWER_ON_DECK } from '@actions/saga-actions'

//Components
import FlipCard from '@components/FlipCard'

//styled
import ErrorToShow from '@styled-components/ErrorToShow'

class Quiz extends PureComponent {
    state = {
        actualPosQuis: 1
    }
    
    receiveAnwser = (posQuestion, answer) => {        
        const { questions, title } = this.props.navigation.state.params
        const { saveAnswer } = this.props

        //Setar resposta em AsyncStorage
        saveAnswer(title, (posQuestion -1), answer)
        .then(res => {
            if (res && res.error) {
                this.setState({ error: res.error.message })
            }

            //Verificar se completou quiz
            if (questions.length === posQuestion) {
                this.props.navigation.navigate('Score', { deck: title })
                return
            }       

            //Tratar answer
            this.setState({ actualPosQuis: posQuestion + 1 })
        })
    }

    render() {
        const { actualPosQuis, error } = this.state
        const data = this.props.navigation.getParam('questions')
        const totalCountCards = data.length

        if (totalCountCards === 0) {
            return <ErrorToShow textError='This deck is still without questions yet. Please add cards to playcards.' />
        }

        const { question, answer } = data[actualPosQuis - 1]

        if (error) {
            return <ErrorToShow textError={error} />
        }

        if (!question) { 
            return null
        }

        return (
            <FlipCard 
                question={question} 
                answer={answer} 
                positionCard={actualPosQuis} 
                totalCountCards={totalCountCards} 
                receiveAnwser={(answered) => this.receiveAnwser(actualPosQuis, answered)}
            />
        )        
    }
}

const { shape, func, string, array } = PropTypes

Quiz.propTypes = {
    navigation: shape({
        getParam: func.isRequired,
        navigate: func.isRequired,
        state: shape({
            params: shape({
                questions: array.isRequired,
                title: string.isRequired
            })
        })
    })
}

const mapDispatchToProps = dispatch => ({
    saveAnswer: (title, indexQuestion, answer) => new Promise((resolve, reject) => dispatch({
        type: SAVE_ANSWER_ON_DECK,
        payload: {
            resolve, reject, title, indexQuestion, answer
        }
    }))
})

export default connect(null, mapDispatchToProps)(Quiz)
