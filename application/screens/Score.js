import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import Emoji from 'react-native-emoji'
import PropTypes from 'prop-types'

//Actions
import { GET_DECK } from '@actions/saga-actions'

//Styled
import Loading from '@styled-components/Loading'
import ErrorToShow from '@styled-components/ErrorToShow'
import Card from '@styled-components/Card'
import TextCenter from '@styled-components/TextCenter'
import ButtonCard from '@styled-components/ButtonCard'
import ButtonText from '@styled-components/ButtonText'


class Score extends Component {
    state = {
        loading: true,
        percentScoreCorrect: 0,
        percentScoreInCorrect: 0
    }

    componentDidMount() {
        const { navigation: { state: { params: { deck } } }, searchDeck } = this.props

        searchDeck(deck)
            .then(res => {
                if (res && res.error) {
                    this.setState({
                        loading: false,
                        error: res.error.message
                    })
                }

                //Pegar novos dados
                const { data } = this.props
                
                if (data.questions.length === 0) {
                    this.setState({
                        loading: false,
                    })
                } else {
                    const questions = data.questions

                    //Calcular PercentScore
                    if (questions.length > 0) {
                        this.setState({
                            loading: false,
                            percentScoreCorrect: ((this.findTotalAnswers(questions, 'C') / questions.length)*100).toFixed(2),
                            percentScoreInCorrect: ((this.findTotalAnswers(questions, 'I') / questions.length)*100).toFixed(2)
                        })
                    }
                }
            })
    }

    findTotalAnswers = (questions, typeAnswer) => questions.reduce((total, item, i) => {
        if (item.answered && item.answered.toUpperCase() === typeAnswer.toUpperCase()) {
            return total + 1
        }

        return total
    }, 0)

    render() {
        const { navigation, data: { questions } } = this.props
        const { loading, error, percentScoreCorrect, percentScoreInCorrect } = this.state
        const { deck } = navigation.state.params

        if (error) {
            return <ErrorToShow textError={error} />
        }

        if (loading) {
            return <Loading />
        }

        //Variables of content score        
        let colorText = '#FF0000'
        let percentToShow = '0.00'
        let textToShow = 'Please playcards first to see a score!'
        let emoji = 'wink'

        if (percentScoreCorrect >= 75) {
            colorText = '#3CB371'
            percentToShow = percentScoreCorrect
            textToShow = "It's great! Congratulations!!!"
            emoji = 'clap'
        }

        if (percentScoreCorrect >= 50 && percentScoreCorrect < 75) {
            colorText = '#3CB371'
            percentToShow = percentScoreCorrect
            textToShow = "Very Good! Work hard another time to raise your score!"
            emoji = 'muscle'
        }

        if (percentScoreCorrect < 50 && percentScoreInCorrect <= 50 && (parseFloat(percentScoreCorrect) !== 0 || parseFloat(percentScoreInCorrect) !== 0)) {
            colorText = '#FFA500'
            percentToShow = percentScoreInCorrect
            textToShow = "You can do more!"
            emoji = 'facepunch'
        }

        if (percentScoreCorrect < 50 && percentScoreInCorrect > 50) {
            colorText = '#FF0000'
            percentToShow = percentScoreInCorrect
            textToShow = "It's worst then i thinked! Get some books to study more!"
            emoji = 'hankey'
        }

        return (
            <Card>
                <TextCenter fontSize='40' color={colorText}>{percentToShow}%</TextCenter>
                <Emoji name={emoji} style={{ fontSize: 50, textAlign: 'center' }} />
                <TextCenter>{textToShow}</TextCenter>
                <View style={{
                    marginLeft: 30,
                    marginRight: 30
                }}>
                    <ButtonCard
                        backgroundColor="#ADD8E6"
                        borderColor="#ADD8E6"
                        onPress={_ => navigation.replace('Quiz', {
                                title: deck,
                                questions
                        })}>
                        <ButtonText colorText="#FFF">Restart Quiz</ButtonText>
                    </ButtonCard>
                </View>
            </Card>
        )        
    }
}

const mapStateToProps = ({ deck: { data, error } }) => ({
    data, error
})

const mapDispatchToProps = dispatch => ({
    searchDeck: (titleDeck)=> new Promise((resolve, reject) => dispatch({ 
        type: GET_DECK, 
        payload: { resolve, reject, deck: titleDeck }}))
})

const { shape, object, string } = PropTypes

Score.propTypes = {
    deck: shape({
        data: object.isRequired,
        error: string
    }),
    navigation: shape({ 
        state: shape({ 
            params: shape({ 
                deck: string.isRequired
            })
        })
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Score)