import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

//Actions
import { GET_DECK } from '@actions/saga-actions'

//Styled
import Loading from '@styled-components/Loading'
import ErrorToShow from '@styled-components/ErrorToShow'
import Container from '@styled-components/Container'
import TextCenter from '@styled-components/TextCenter'


class Score extends Component {
    state = {
        loading: true,
        percentScoreCorrect: 0,
        percentScoreInCorrect: 0
    }

    componentDidMount() {
        const { deck } = this.props.navigation.state.params
        const { searchDeck } = this.props

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

                if (data) {
                    const questions = data.questions

                    //Calcular PercentScore
                    this.setState({
                        loading: false,
                        percentScoreCorrect: ((this.findTotalAnswers(questions, 'C') / questions.length)*100).toFixed(2),
                        percentScoreInCorrect: ((this.findTotalAnswers(questions, 'I') / questions.length)*100).toFixed(2)
                    })
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
        const { deck } = this.props.navigation.state.params
        const { loading, error, percentScoreCorrect, percentScoreInCorrect } = this.state

        if (error) {
            return <ErrorToShow textError={error} />
        }

        if (loading) {
            return <Loading />
        }

        return (
            <Container>
                <TextCenter>{percentScoreCorrect}%</TextCenter>
                <TextCenter>{percentScoreInCorrect}%</TextCenter>
            </Container>
        )        
    }
}

const mapStateToProps = ({deck: { data, error }}) => ({
    data, error
})

const mapDispatchToProps = dispatch => ({
    searchDeck: (titleDeck)=> new Promise((resolve, reject) => dispatch({ 
        type: GET_DECK, 
        payload: { resolve, reject, deck: titleDeck }}))
})

export default connect(mapStateToProps, mapDispatchToProps)(Score)