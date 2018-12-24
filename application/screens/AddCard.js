import React, { PureComponent } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//Actions
import { SAVE_QUESTION_ON_DECK, GET_DECKS } from '@actions/saga-actions'

//Styled components
import ContentAddCard from '@styled-components/ContentAddCard'
import ContainerButton from '@styled-components/ContainerButton'
import TextCenter from '@styled-components/TextCenter'
import TextInput from '@styled-components/TextInput'
import ButtonCard from '@styled-components/ButtonCard'
import BoxResponseMessage from '@styled-components/BoxResponseMessage'


class AddCard extends PureComponent {
    state = {
        textQuestion: '',
        textAnswer: '',
        success: false,
        error: ''
    }

    handleTextQuestion = (textQuestion) => this.setState({ textQuestion })
    
    handleTextAnswer = (textAnswer) => this.setState({ textAnswer })

    saveQuestion = () => {
        const { textQuestion, textAnswer } = this.state
        const { navigation: { state: { params: { deck } } } } = this.props

        this.props.saveQuestion(deck, textQuestion, textAnswer)        
        .then(res => {
            this.props.getDecks()
            .then(res => {
                if (this.props.error) {
                    this.setState({
                        success: false,
                        error: this.props.error,
                        textQuestion: '', 
                        textAnswer: ''
                    })
                    return
                }

                this.setState({
                    success: true,
                    error: '',
                    textTitle: '',
                    textQuestion: '', 
                    textAnswer: ''
                })
            })
        })
        .catch(error => this.setState({ error:error.message }))
    }

    setTimeToHideMessage = () => {
        setTimeout(() => this.setState({ 
            success: false,
            error: ''
        }), 5000)
    }

    render() {
        const { textQuestion, textAnswer, success, error } = this.state
        let typeAlert, textToShow
        let component = null

        if (success) {
            typeAlert ='success'
            textToShow = 'Question saved with success!'
        }

        if (error) {
            typeAlert ='danger'
            textToShow = error
        }

       if (success || error) {
            component = <BoxResponseMessage typeAlert={typeAlert} textToShow={textToShow} />
            this.setTimeToHideMessage()
       }

        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding">
                {component || null}
                <ContentAddCard style={{ backgroundColor: '#FFF' }}>
                    <TextInput
                        placeholder='Question'
                        value={textQuestion}
                        onChangeText={(text) => this.handleTextQuestion(text)}
                        style={{ marginTop: 40 }}
                        borderColor='#ADD8E6'
                        />

                    <TextInput
                        placeholder='Answer'
                        value={textAnswer}
                        onChangeText={(text) => this.handleTextAnswer(text)} 
                        style={{ marginTop: 40 }}
                        borderColor='#ADD8E6'
                        />
                    <ContainerButton>
                        <ButtonCard 
                            backgroundColor='#ADD8E6' 
                            borderColor='#F5F5F5'
                            onPress={() => this.saveQuestion()}
                            style={{ alignSelf: 'center'}}>
                            <TextCenter color='#FFF'>Submit</TextCenter>
                        </ButtonCard>
                    </ContainerButton>
                </ContentAddCard>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = ({ listDecks: { error } }) => ({
    error
})

const mapDispatchToProps = dispatch => ({
    saveQuestion: (title, question, answer) => new Promise((resolve, reject) => dispatch({
        type: SAVE_QUESTION_ON_DECK,
        payload: {
            resolve,
            reject,
            title,
            question,
            answer,
        }
    })),
    getDecks: _=> new Promise((resolve, reject) => dispatch({
        type: GET_DECKS,
        payload: {
            resolve,
            reject
        }
    }))
})

const { shape, string, func } = PropTypes

AddCard.propTypes = {
    navigation: shape({ 
        state: shape({ 
            params: shape({ 
                deck: string.isRequired 
            })
        })
    }),
    saveQuestion: func.isRequired,
    getDecks: func.isRequired,
    listDecks: shape({
        error: string
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)